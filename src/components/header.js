import { BiSearch } from 'react-icons/bi';
import '../style/header.css';
function Header() {
    return (
        <div className="header-bg">
            <div className="header-logo">
                <img className='logo' src='https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png'></img>
            </div>
            <div className='inp-val'>
                <BiSearch className='inp-logo' />
                <input type='text' placeholder='Weather in your City'></input>
            </div>
            <div>
                <a href=''>Guide</a>
                <a href=''>API</a>
                <a href=''>Dashboard</a>
                <a href=''>Marketplace</a>
                <a href=''>Pricing</a>
                <a href=''>Maps</a>
                <a href=''>Our Initiatives</a>
                <a href=''>Partners</a>
                <a href=''>Blog</a>
                <button className='btn' type='button' >For Business </button>
            </div>
            <div>
                <a href=''>Sign in</a>
                <select>
                    <option>Support</option>
                    <option>FAQ</option>
                    <option>How To Start</option>
                    <option>Ask a question</option>
                </select>
            </div>
        </div>
    )
}
export default Header;