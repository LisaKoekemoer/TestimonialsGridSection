import './App.css';
import daniel from './images/image-daniel.jpg';
import jonathan from './images/image-jonathan.jpg';
import jeanette from './images/image-jeanette.jpg';
import patrick from './images/image-patrick.jpg';
import kira from './images/image-kira.jpg';
import quotePattern from './images/bg-pattern-quotation.svg';

function App() {
  return (
    <>
      <div className='testimonial-grid'>
        {/* Daniel Clifford */}
          <div className='item1'>
            <div className='credentials' >
              <img className='avatar' src={daniel} alt="" />
              <div className='graduate-details'>
                <p className='full-name'>Daniel Clifford</p>
                <p className='graduate'>Verified Graduate</p>
              </div>
            </div>
              <img className='bgPattern' src={quotePattern} alt="" />
              <h1 className='headline'>
                I received a job offer mid-course, and the subjects I 
                learned were current, if not more so, in the company I joined. 
                I honestly feel I got every penny’s worth.
              </h1>
              <p className='testimonial'>
                “ I was an EMT for many years before I joined the bootcamp. 
                I’ve been looking to make a transition and have heard some 
                people who had an amazing experience here. I signed up
                for the free intro course and found it incredibly fun! I 
                enrolled shortly thereafter. The next 12 weeks was the 
                best - and most grueling - time of my life. Since 
                completing the course, I’ve successfully switched 
                careers, working as a Software Engineer at a VR startup. ”
              </p>
          </div>


          {/* Jonathan Walters */}
          <div className='item2'>
            <div className='credentials'>
              <img className='avatar' src={jonathan} alt="" />
              <div className='graduate-details'>
                <p className='full-name'>Jonathan Walters</p>
                <p className='graduate'>Verified Graduate</p>
              </div>
            </div>
              <h1 className='headline'>
                The team was very supportive and kept me motivated
              </h1>
              <p className='testimonial'>
                “ I started as a total newbie with virtually no coding skills. 
                I now work as a mobile engineer for a big company. This was 
                one of the best investments I’ve made in myself. ”
              </p>
          </div>

          {/* Jeanette Harmon */}
          <div className='item3'>
            <div className='credentials'>
              <img className='avatar' src={jeanette} alt="" />
              <div className='graduate-details'>
                <p className='full-name'>Jeanette Harmon</p>
                <p className='graduate'>Verified Graduate</p>
              </div>
            </div>
              <h1 className='headline'>
                An overall wonderful and rewarding experience
              </h1>
              <p className='testimonial'>
                “ Thank you for the wonderful experience! I now have a job 
                I really enjoy, and make a good living while doing something 
                I love. ”
              </p>
          </div>

          {/* Patrick Abrams */}
          <div className='item4'>
            <div className='credentials'>
              <img className='avatar' src={patrick} alt="" />
              <div className='graduate-details'>
                <p className='full-name'>Patrick Abrams</p>
                <p className='graduate'>Verified Graduate</p>
              </div>
            </div>
              <h1 className='headline'>
                Awesome teaching support from TAs who did the bootcamp 
                themselves. Getting guidance from them and learning from 
                their experiences was easy.
              </h1>
              <p className='testimonial'>
                “ The staff seem genuinely concerned about my progress which 
                I find really refreshing. The program gave me the confidence 
                necessary to be able to go out in the world and present myself 
                as a capable junior developer. The standard is above the rest. 
                You will get the personal attention you need from an incredible 
                community of smart and amazing people. ”
              </p>
          </div>

          {/* Kira Whittle */}
          <div className='item5'>
              <div className='credentials'>
                <img className='avatar' src={kira} alt="" />
                <div className='graduate-details'>
                  <p className='full-name'>Kira Whittle</p>
                  <p className='graduate'>Verified Graduate</p>
                </div>
              </div>
                <h1 className='headline'>
                  Such a life-changing experience. Highly recommended!
                </h1>
                <p className='testimonial'>
                  “ Before joining the bootcamp, I’ve never written a line of code.
                  I needed some structure from professionals who can help me learn 
                  programming step by step. I was encouraged to enroll by a former
                  student of theirs who can only say wonderful things about the 
                  program. The entire curriculum and staff did not disappoint. 
                  They were very hands-on and I never had to wait long for 
                  assistance. The agile team project, in particular, was outstanding.
                  It took my learning to the next level in a way that no tutorial
                  could ever have. In fact, I’ve often referred to it during 
                  interviews as an example of my developent experience. It certainly 
                  helped me land a job as a full-stack developer after receiving 
                  multiple offers. 100% recommend! ”
                </p>
          </div>
      </div>
      
    </>
  );
}

export default App;
