import { Container } from 'react-bootstrap';

export default function AdminFooter() {
    return (
        <footer className="py-4 bg-light mt-auto">
            <Container fluid className="px-4">
                <div className="d-flex align-items-center small">
                    <div className="text-muted">Devoloped by <a href="https://kalosmk.com" target="_blank" rel="noreferrer">Kalos MK</a>&copy; 2022</div>
                </div>
            </Container>
        </footer>
    )
}