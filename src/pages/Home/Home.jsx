import Form from '../../components/Form/Form';
import ListScreen from '../../components/List/List';
import './Home.css';

import { useQuery } from '@tanstack/react-query';

export default function Home() {

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://localhost:3330/list').then((res) =>
            res.json(),
          ),
      })

    return (
        <>
            <section>
                <div className='Form'>
                    <h1>Liberar Mac</h1>
                    <Form data={data} />
                </div>

                <div className='Divider'></div>

                <div className='List'>
                    <h1>Listar Mac</h1>
                    <ListScreen isPending={isPending} error={error} data={data} />
                </div>
            </section>
        </>
    );
}