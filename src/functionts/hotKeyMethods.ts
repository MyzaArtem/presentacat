import React from 'react';

export default function useHotKeys(
    redo: () => void,
    undo: () => void
) {
    function undoHotKey(e: KeyboardEvent) {
        if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
            undo();
        }
    }
    function redoHotKey(e: KeyboardEvent) {
        if (e.key === 'y' && (e.metaKey || e.ctrlKey)) {
            redo();
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', undoHotKey);
        window.addEventListener('keydown', redoHotKey);
        return () => {
            window.removeEventListener('keydown', undoHotKey);
            window.removeEventListener('keydown', redoHotKey);
        };
    });
}