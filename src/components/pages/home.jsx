import guardian from '../../images/guardian.png';
import spiderman from '../../images/spiderman.png';

function HomeFunc() {
    return (
      <main>
        <div className="py-5">
            <h1 className="text-white">FIND MOVIES</h1>
            <h2 className="text-white">TV SHOWS AND MORE</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur.<br/>
             Accusantium, autem, consequuntur, corporis, delectus, doloremque,<br/>
              facere, fugiat, harum, iusto, libero, magni, maxime, nobis, nobis,</p>
        </div>
        <div className="w-[500px] relative">
          <div className="absolute w-[300px] top-0 right-0">
            <img src={spiderman} alt="spiderman" className='w-full h-auto' />
          </div>
          <div className="absolute w-[300px] top-[50px] right-[70px]">
            <img src={guardian} alt="guardian" className='w-full h-auto'/>
          </div>
        </div>
      </main>
    );
  }
  
  export default HomeFunc;