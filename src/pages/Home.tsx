import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        The world is your oyster
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener" href="https://ionicframework.com/jp/docs/">docks</a>
          {' '}
          will be your guide
        </p>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
