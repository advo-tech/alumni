import illustration from './assets/illustration.jpeg';
import Frame from './Frame.js'


function AnnualAppeal() {
  return (
      <Frame
        text={
          <>
          <h2>Annual Appeal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et vulputate turpis. Sed quis augue sapien. Pellentesque at dui pellentesque, malesuada leo eu, interdum ex. Sed ac facilisis lectus. Sed mollis dui non ante finibus, id rutrum libero sagittis. Praesent in diam in urna pellentesque pellentesque. Mauris vestibulum elementum enim vel dapibus. Nunc elit odio, ultricies non purus at, tincidunt consequat ligula. Donec blandit scelerisque augue non laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus laoreet dui sit amet mi ullamcorper tristique. Sed quis sagittis magna, sed tempor nulla. Donec pulvinar, lectus sit amet luctus volutpat, risus ligula ultrices magna, id rhoncus leo velit non mauris.</p>

          <p>Morbi tempor ipsum vel felis dictum convallis. Vestibulum at tristique lacus, eu consectetur ligula. Fusce placerat mi vel lectus tristique, ut semper sapien accumsan. Quisque eleifend viverra accumsan. Proin euismod, justo quis dapibus posuere, elit mi dapibus magna, et pellentesque ante arcu vel purus. Vivamus rutrum nunc et velit ultrices scelerisque. Cras nibh turpis, facilisis quis euismod vel, suscipit id ipsum. Aliquam quis tortor dui. Duis mollis elementum mollis.</p>

          <p>Maecenas sollicitudin viverra scelerisque. Aliquam et venenatis nibh. Vivamus magna erat, porta sed faucibus nec, bibendum ut metus. Phasellus feugiat non nibh in dignissim. Donec sollicitudin tortor ac libero pulvinar, sit amet lobortis metus laoreet. Vivamus bibendum ex vel porta sodales. Nam consectetur accumsan justo, ac consectetur augue convallis sit amet. Praesent pulvinar placerat metus. Vestibulum aliquet ex mauris, ut lacinia magna feugiat eu. Sed erat nunc, vehicula nec neque vitae, tincidunt bibendum neque. Aliquam cursus id velit vitae commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum quam nec elit sagittis, ut tempor sapien euismod. Fusce porta venenatis quam, eget consectetur purus aliquet eget. Morbi quis nisl ut nunc ullamcorper tincidunt. Vestibulum mattis condimentum felis, id maximus neque pulvinar nec.

          </p>
          </>
        }

        illustration={illustration}
        illustrationCaption="Illustration by Tosca Langbert '24"
        button = {"Donate to the Annual Appeal"}
        buttonLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
  );
}

export default AnnualAppeal;
