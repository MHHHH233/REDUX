import { useDispatch } from 'react-redux';
import { supprimer } from './VoitureListe';

export const Voiture = ({ key, id, Marque, Type, prix, image }) => {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{id}</td>
            <td>{Marque}</td>
            <td>{Type}</td>
            <td>{prix}</td>
            <td><img width={100} height={100} src={image} alt={Marque} /></td>
            <td>
                <button onClick={() => dispatch(supprimer(id))} style={{ backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px' }}>
                    Supprimer
                </button>
            </td>
        </tr>
    );
};