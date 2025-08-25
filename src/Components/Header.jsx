import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
       <div className='flex flex-col justify-center items-center gap-2.5 py-3'>
         <div className='logo'>
            <img className='w-[470px]' src={logo} alt={logo} />
        </div>
        <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
        <p className='text-gray-500 font-semibold'>{moment().format("dddd, MMMM DD, YYYY")}</p>
       </div>
    );
};

export default Header;