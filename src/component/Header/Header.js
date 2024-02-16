import '../../assets/css/main.css'
import "../../assets/sass/main.scss"

function Header() {
    return(
        <header id="header">
        <div class="inner">
            <a href="#" class="image avatar"><img src={require('../../assets/images/me.jpg')} alt="" /></a>
            <h1><strong>김상훈</strong><br />
            <strong class="icon solid fa-home"/> 인천 남동구 문화로 145번길 48-26<br/>
            <strong class="icon solid fa-mobile-alt"/> 010-2271-1937<br/>
            <strong class="icon solid fa-envelope"/> yofp1937@naver.com
            </h1>
        </div>
        
        <footer id="footer">
            <div class="inner">
                <ul class="icons">
                    <li><a href="https://github.com/yofp1937" class="icon brands fa-github"><span class="label">Github</span></a></li>
                </ul>
                <ul class="copyright">
                    <li>&copy; Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
        
        </header>
    );
}

export default Header;