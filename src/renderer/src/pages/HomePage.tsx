import { ReactNode } from 'react';
import IconButton from '../components/button/IconButton';
import { Body, Footer, Header, Page } from '../components/content';
import Versions from '../components/Versions';

export default function HomePage(): ReactNode {
  const handleAction = (id: string): void => {
    console.log('> Action =>', id);
  };

  return (
    <Page>
      <Header title="Home">
        <IconButton id="test" icon="FlaskRound" onAction={handleAction} />
        <IconButton id="some" icon="Sun" onAction={handleAction} />
      </Header>
      <Body>
        <p>Content</p>
      </Body>
      <Footer>
        <Versions />
      </Footer>
    </Page>
  );
}
