import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Dropdown, Menu, Icon, Image, Input, Button, Embed} from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    const color = {color:"white"};
    const home = {color:"#8B0000"};
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image height="76px" width="76px" src='https://static.wixstatic.com/media/1f31ed_b69ec0ade2864eafa292ccfa853f86b6~mv2_d_1207_1207_s_2.png/v1/fill/w_152,h_152,al_c,q_80,usm_0.66_1.00_0.01/1f31ed_b69ec0ade2864eafa292ccfa853f86b6~mv2_d_1207_1207_s_2.webp' />

            <Grid container centered>
              <Menu.Item style={home}>HOME</Menu.Item>
              <Menu.Item style={color}>ABOUT</Menu.Item>
              <Menu.Item style={color}>MEDIA</Menu.Item>

              <Menu.Item>
                <Dropdown style={color} text="DOJO">
                  <Dropdown.Menu>
                    <Dropdown.Item>INFO</Dropdown.Item>
                    <Dropdown.Item>SIGN UP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item>
                <Dropdown style={color} text="STORE">
                  <Dropdown.Menu>
                    <Dropdown.Item>KIN AESTHETIK</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item style={color}>CLIENTS</Menu.Item>
              <Menu.Item style={color}>PARTNERS</Menu.Item>
              <Menu.Item style={color}>BOOKING</Menu.Item>
            </Grid>

          </Container>
        </Menu>
  )
  }
}

class Logo extends React.Component {
  render() {
    return (
          <Embed
              autoplay={true}
              loop={true}
              placeholder='http://getwallpapers.com/wallpaper/full/1/6/7/36805.jpg'
              url='https://video.wixstatic.com/video/1f31ed_871711b9333045369e97e2c4a1e1d0d8/720p/mp4/file.mp4'
              source='mp4'
          />
  )
  }
}

class FooterMenu extends React.Component {
  render() {
    const color = {color:"white"};
    return (
        <Menu borderless className="footer-background">

          <Menu.Item style={color}><Input placeholder="Email Address" label={<Button color="black">Subscribe Now</Button>} labelPosition="right"/></Menu.Item>
          <Menu.Item fitted style={color} position="right"><Icon name="large instagram" /></Menu.Item>
          <Menu.Item fitted style={color}><Icon name="large youtube" /></Menu.Item>
          <Menu.Item fitted style={color}><Icon name="large twitter" /></Menu.Item>
          <Menu.Item fitted style={color}><Icon name="large facebook f" /></Menu.Item>

        </Menu>
  )
  }
}

class WebsiteChoice extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <Logo/>
        <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<WebsiteChoice/>, document.getElementById('root'));