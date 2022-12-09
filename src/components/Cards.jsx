import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return characters.map(x => { return<Card onClose={() => props.onClose(x.id)} name={x.name} species={x.species} gender={x.gender} image={x.image} status={x.status} type={x.type} origin={x.origin.name} location={x.origin.url} > </Card>});
}
