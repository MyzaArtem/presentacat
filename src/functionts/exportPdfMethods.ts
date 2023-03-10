import {
    AppType,
    SlideType,
    SlideNode,
    SettingsObject,
} from '../types/types';
import { jsPDF } from 'jspdf';
import hexRgb from 'hex-rgb';
import CanvasTextWrapper from 'canvas-text-wrapper';
import { getBase64 } from './getImageBase64';

export async function exportPDF(app: AppType) {
    const pageSize = [app.settings.slideWidth, app.settings.slideHeight];
    const doc = new jsPDF({
        unit: 'pt',
        orientation: 'l',
        format: pageSize,
    });
    await setDocObjects(doc, app);
    doc.save(`${app.name}.pdf`);
}

async function setDocObjects(doc: jsPDF, app: AppType) {
    let firstSlide = true;
    for (let i = 0; i < app.slides.slides.length; i++) {
        if (!firstSlide) doc.addPage();
        else firstSlide = false;
        await setSlideObjects(doc, app.slides.slides[i], app.settings);
    }
}

async function setSlideObjects(
    doc: jsPDF,
    slide: SlideType,
    settings: SettingsObject
) {
    if (slide.background) {
        if (slide.background.indexOf('#') !== -1) {
            const rgb = hexRgb(slide.background);
            doc.setFillColor(
                Number(rgb.red),
                Number(rgb.green),
                Number(rgb.blue)
            );
            doc.rect(0, 0, settings.slideWidth, settings.slideHeight, 'F');
        }
        if (slide.background.indexOf('base64') !== -1) {
            doc.addImage(slide.background, 'JPEG', 0, 0, settings.slideWidth, settings.slideHeight);
        }
    }
    
    const sortedSlideObjects = slide.objects;

    const promises = sortedSlideObjects.map(async (node) => {
        const promise = await setObject(doc, node);
        return promise;
    });
    await Promise.all(promises);
}

function setObject(doc: jsPDF, node: SlideNode) {
    return new Promise<void>(async (resolve) => {
        if (node.type === 'text') {
            var canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            if (ctx) {
                let text = node.data;
                const offset = node.fontDecoration === 'underline' ? 20 : 0;
                const height = node.height + offset;
                const width = node.width;
                canvas.width = width;
                canvas.height = height;
                ctx.fillStyle = node.color;
                ctx.strokeStyle = node.color;
                ctx.lineWidth = 2;
                CanvasTextWrapper.CanvasTextWrapper(canvas, text, {
                    font: `${node.fontStyle === 'italic' ? 'italic' : ''} ${node.fontWeight} ${node.fontSize}px ${node.fontFamily}`,
                    textDecoration: node.fontDecoration === 'underline' ? 'underline' : 'none',
                    paddingY: node.fontDecoration === 'underline' ? 10 : 0
                });
                let base64 = canvas.toDataURL();
                doc.addImage(
                    base64,
                    'PNG',
                    node.positionTopLeft.x,
                    node.positionTopLeft.y,
                    width,
                    height
                )
            }
        }
        if (node.type === 'img') {
            let base64 = node.path;
            if (node.path.indexOf('.') !== -1) {
                base64 = await getBase64(node);
            }
            doc.addImage(
                base64,
                'JPEG',
                node.positionTopLeft.x,
                node.positionTopLeft.y,
                node.width,
                node.height
            );
        }
        let style: string = 'S';
        if (node.type === 'figure') {
            const rgb = hexRgb(node.strokeColor);
            doc.setDrawColor(
                Number(rgb.red),
                Number(rgb.green),
                Number(rgb.blue)
            );
            doc.setLineWidth(node.strokeWidth);
            if (node.background) {
                const rgb = hexRgb(node.background);
                doc.setFillColor(
                    Number(rgb.red),
                    Number(rgb.green),
                    Number(rgb.blue)
                );
                style = 'FD';
            }
        }
        if (node.type === 'figure' && node.figure === 'circle') {
            doc.circle(
                node.positionTopLeft.x + node.width / 2,
                node.positionTopLeft.y + node.width / 2,
                node.width / 2,
                style
            );
        }
        if (node.type === 'figure' && node.figure === 'rectangle') {
                doc.rect(
                    node.positionTopLeft.x,
                    node.positionTopLeft.y,
                    node.width,
                    node.height,
                    style
                );
        }
        if (node.type === 'figure' && node.figure === 'triangle') {
            doc.triangle(
                node.positionTopLeft.x + node.width / 2,
                node.positionTopLeft.y,
                node.positionTopLeft.x,
                node.positionTopLeft.y + node.height,
                node.positionTopLeft.x + node.width,
                node.positionTopLeft.y + node.height,
                style
            );
        }
        resolve();
    });
}