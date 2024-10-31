import './Logement.scss'
import Collapse from '../../components/Collapse/Collapse'
import Logements from '../../datas/Logements.json'


// TODO: Récupérer les données du logement à partir de Logements.json et les afficher dans la page Logement.jsx
function Logement() {
  return (
    <main>
      <div className='carousel'><img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" /></div>
      <section className='description'>
      <div>
      <h2 className='title'>Titre location</h2>
      <p className='location'>localisation</p>
      </div>
      <div className='host'>
        <p>Name</p>
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="" />
      </div>
      </section>
      <section className='description'>
      <div className='tags'>
        <div className='tag'>Tag1</div>
        <div className='tag'>Tag2</div>
        <div className='tag'>Tag3</div>
      </div>
      <div className='rating'>⭐⭐⭐⭐⭐</div>
      </section>
      <div className='collapses'>
        <Collapse title="Description" content="Content 1 " />
        <Collapse title="Équipements" content="Content 2 " />
      </div>
    </main>
  )
}


export default Logement