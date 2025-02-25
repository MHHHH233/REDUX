import { useEffect } from 'react';
import { Voiture } from './Voiture';
import { useSelector, useDispatch } from 'react-redux';
import { setVoitures } from './VoitureListe';
import AjouterVoiture from './AjouterVoiture';

const ListVoitures = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.voitures.data);

    useEffect(() => {
        // Fake data
        const fakeData = [
            { id: 1, Marque: 'Toyota', Type: 'Sedan', prix: 200, image: 'https://images.unsplash.com/photo-1549138144-42ff3cdd2bf8?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 2, Marque: 'Honda', Type: 'SUV', prix: 250, image: 'https://images.unsplash.com/photo-1549138144-42ff3cdd2bf8?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id: 3, Marque: 'Ford', Type: 'Truck', prix: 300, image: 'https://images.unsplash.com/photo-1549138144-42ff3cdd2bf8?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        ];
        dispatch(setVoitures(fakeData));
    }, [dispatch]);

    return (
        <>
            <AjouterVoiture />
            <h1>Liste des Voitures:</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Marque</td>
                        <td>Type</td>
                        <td>Prix</td>
                        <td>Image</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((voiture, key) => (
                        <Voiture key={key} id={voiture.id} Marque={voiture.Marque} Type={voiture.Type} prix={voiture.prix} image={voiture.image} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListVoitures;