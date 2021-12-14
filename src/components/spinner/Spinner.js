import Spinner from 'react-bootstrap/Spinner'
import './Spinner.scss'

const SpinnerComponent = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    )
}

export default SpinnerComponent;
