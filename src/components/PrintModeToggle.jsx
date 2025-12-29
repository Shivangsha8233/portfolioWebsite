import '../styles/print.css';

export default function PrintModeToggle() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <button
            onClick={handlePrint}
            className="print-mode-toggle paper-rustle"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                background: '#3b2f2f',
                color: '#f7f3e8',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '50px',
                fontFamily: 'var(--font-hand)',
                cursor: 'pointer',
                zIndex: 100,
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}
        >
            <span>🖨️</span> Save as PDF
        </button>
    );
}
