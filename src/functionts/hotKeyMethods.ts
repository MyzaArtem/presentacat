import React from 'react';

export default function useHotKeys(
    redo: () => void,
    undo: () => void
) {
    function undoHotKey(e: KeyboardEvent) {
        if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
            if (e.shiftKey) redo();
            else undo();
        }
    }
    React.useEffect(() => {
        window.addEventListener('keydown', undoHotKey);
        return () => {
            window.removeEventListener('keydown', undoHotKey);
        };
    });
}
