import Form from '../../components/Form/Form';
import ListScreen from '../../components/List/List';
import './Home.css';

export default function Home() {

    return (
        <>
            <section>
                <div className='Form'>
                    <h1>Liberar Mac</h1>
                    <Form />
                </div>

                <div className='Divider'></div>

                <div className='List'>
                    <h1>Listar Mac</h1>
                    <ListScreen />
                </div>
            </section>
        </>
    );
}