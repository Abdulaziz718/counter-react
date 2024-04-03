import React from 'react'
import png from "./img/React-amico.png"

const Question = () => {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-14">
            <div>
                <img src={png} alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-bold'>Tez -tez savollar beriladi</h1>
                <p className='text-slate-400 text-lg pt-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className='text-lg pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cumque voluptatibus nobis quasi! Facere nemo quidem corporis ratione nam molestiae vel soluta aut, accusamus dolore, similique incidunt sequi reprehenderit tempora suscipit autem ipsum aspernatur iusto voluptatem? Deserunt, sed! Ex cupiditate optio consequatur neque nostrum. Debitis a vel mollitia autem culpa laborum quibusdam veritatis numquam, id ipsa ex eveniet dolore fugiat reiciendis. Itaque amet velit perferendis doloremque eaque adipisci beatae earum.</p>
            </div>
        </div>
    </>
  )
}

export default Question