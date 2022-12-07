import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return characters.map(x => { return<Card onClose={() => window.alert('Emulamos que se cierra la card')} name={x.name} species={x.species} gender={x.gender} image={x.image}></Card>});
}
