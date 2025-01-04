import "./Home.css"
import { FaArrowRight, FaArrowDown, FaArrowUp} from "react-icons/fa6"

const Home = () => {
  return (
    <div className='home_container'>
          <div className='home_intro_container'>
            <h1 className="home_title">How AI and Automation Are Changing Web Design and Marketing</h1>
            <span className="home_shadow"></span>

            <div className="home_buttons_container">
              <a href="#text" alt="scroll down">Discover<FaArrowDown /></a>
              <a href="https://artech-agency.co" alt="external website to artech">Start with us<FaArrowRight/></a>
            </div>
          </div>

          <div className="home_text_container" id="text">
          <h2 className="home_title_top_five">Introduction</h2>
            <p className="home_paragraph p_with_special_margin_one">The rise of artificial intelligence (AI) and automation is transforming industries, and web design and marketing are no exceptions. These technologies are streamlining processes, enhancing user experiences, and enabling businesses to connect with their audiences in innovative ways. In this blog, we’ll explore how AI and automation are reshaping these fields and the opportunities they create for businesses.</p>
            <h2 className="home_title_top_five">AI in Web Design</h2>
            <div className="home_examples_paragraph p_special_margin_five"><p><span>Personalized User Experiences</span>AI analyzes user behavior to deliver tailored web experiences. From recommendation engines suggesting products to chatbots providing 24/7 support, personalization improves engagement and conversion rates. For example, integrating virtual assistants into websites ensures users receive immediate, relevant assistance.</p></div>
            <div className="home_examples_paragraph p_normal_margin"><p><span>Automated Design Tools</span>AI-powered tools like those on platforms such as Wix or Squarespace make web design more accessible. These tools can generate layouts based on user inputs, saving time and resources. However, for businesses seeking unique branding, custom designs remain essential.</p></div>
            <div className="home_examples_paragraph p_with_special_margin_six"><p><span>Enhanced Accessibility</span>AI helps make websites more inclusive with features like automated alt text for images, real-time translations, and voice navigation. These innovations allow businesses to reach broader audiences and improve usability.</p></div>

            <div className="home_image_continer"></div>

            <h2 className="home_title_top_five">Benefits of AI and Automation</h2>
            <p className="home_paragraph " style={{marginTop:"3px"}}>Automating repetitive tasks reduces time and errors.</p>
            <p className="home_paragraph ">AI enables businesses to manage larger workloads seamlessly.</p>
            <p className="home_paragraph ">Automation reduces operational costs significantly.</p>
            <p className="home_paragraph p_with_special_margin_tree"> With AI handling technical aspects, teams can focus on innovation and storytelling.</p>

            <h2 className="home_title_top_five">Challenges to Consider</h2>
            <p className="home_paragraph "style={{marginTop:"3px"}}> Using customer data responsibly is crucial to maintaining trust.</p>
            <p className="home_paragraph ">Teams need training to maximize the potential of AI tools.</p>
            <p className="home_paragraph p_with_special_margin_tree"> Authenticity remains vital for building lasting connections with customers.</p>

            <h2 className="home_title_top_five">Real-World Examples</h2>
            <div className="home_examples_paragraph p_special_margin_five"><p><span>Spotify:</span> Personalized playlists powered by AI enhance user engagement.</p></div>
            <div className="home_examples_paragraph p_normal_margin"><p><span>Canva:</span> AI tools simplify graphic design with smart suggestions.</p></div>
            <div className="home_examples_paragraph p_with_special_margin_six"><p><span>Amazon:</span>AI optimizes product recommendations and inventory management.</p></div>
            
            <h2 className="home_title_top_five">Conclusion</h2>
            <p className="home_paragraph p_special_margin_five">AI and automation are revolutionizing web design and marketing, enabling businesses to work smarter and connect with audiences more effectively. At Artech, we specialize in integrating these technologies into tailored solutions that drive success. Whether it’s developing chatbots, automating campaigns, or enhancing website performance, we’re here to help you navigate the future of digital innovation.</p>
          </div>

          <div className="home_footer_buttons_container">
              <a href="#text" alt="scroll down">Discover<FaArrowUp/></a>
              <a href="https://artech-agency.co" alt="external website to artech">Start with us<FaArrowRight/></a>
            </div>
    </div>
  )
}

export default Home