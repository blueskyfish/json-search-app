import { Body, Footer, Header, Page } from '../components/content';
import Versions from '../components/Versions';

export default function SettingsPage(): JSX.Element {
  return (
    <Page>
      <Header title="Settings" backward={true}></Header>
      <Body>
        <p>Settings</p>
      </Body>
      <Footer>
        <Versions></Versions>
      </Footer>
    </Page>
  );
}
