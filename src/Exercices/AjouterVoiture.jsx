import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterVoiture } from './VoitureListe';

const AjouterVoiture = () => {
    const dispatch = useDispatch();
    const [newVoiture, setNewVoiture] = useState({
        id: '',
        Marque: '',
        Type: '',
        prix: 0,
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewVoiture({ ...newVoiture, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(ajouterVoiture(newVoiture));
        setNewVoiture({
            id: '',
            Marque: '',
            Type: '',
            prix: 0,
            image: '',
        });
    };

    return (
        <form onSubmit={handleClick}>
            <input type="text" placeholder="ID" name="id" onChange={handleChange} value={newVoiture.id} />
            <input type="text" placeholder="Marque" name="Marque" onChange={handleChange} value={newVoiture.Marque} />
            <input type="text" placeholder="Type de carburant" name="Type" onChange={handleChange} value={newVoiture.Type} />
            <input type="number" placeholder="Prix de location" name="prix" onChange={handleChange} value={newVoiture.prix} />
            <input type="text" placeholder="Image URL" name="image" onChange={handleChange} value={newVoiture.image} />
            <input type="submit" value="Ajouter" />
        </form>
    );
};

export default AjouterVoiture;