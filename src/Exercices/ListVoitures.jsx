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
            { id: 1, Marque: 'Toyota', Type: 'Sedan', prix: 200, image: 'https://example.com/toyota.jpg' },
            { id: 2, Marque: 'Honda', Type: 'SUV', prix: 250, image: 'https://example.com/honda.jpg' },
            { id: 3, Marque: 'Ford', Type: 'Truck', prix: 300, image: 'https://example.com/ford.jpg' },
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