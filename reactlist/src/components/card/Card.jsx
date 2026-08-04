import './Card.css'
import ImagemCaneta from '../../assets/IconPen.svg'
import ImagemLixo from '../../assets/IconTrash.svg'

function Card(props) {

    return (
        <article className='cardtask' key={props.id}>
          <p className='cardtask__task-text'> {`${props.cardText}`} </p>
          <div>
          <button className='cardtask-button' onClick={() => props.funcEdit(props.id)}><img src={ImagemCaneta} alt="Imagem Caneta" /></button>
          <button className='cardtask-button' onClick={() => props.funcDelete(props.id)} ><img src={ImagemLixo} alt="Imagem Lixo" /></button>
          </div>
        </article>
    )
}

export default Card
