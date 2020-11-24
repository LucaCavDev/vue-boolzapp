var app = new Vue ({
  el: '#app',

  data: {
    contattiIndice: 0,  //serve per fare un'ancora intorno al quale lavorare COPIA DI SLIDER
    // indice dei 4 contatti posto uguale a 0 come nello slider dove si assegnava la classe active tramite l'indice
    contatti4: [
      {
        nome: 'Michele',
        immagine: 'img/avatar_1.jpg',
        attivo: true,
        messaggi: [
          {
            mex: 'Hai portato a spasso il cane?',
            dataOraMex: '10/01/2020 15:30:55',
            invOric: 'inviato',
            colore: 'mexVerde'
          },
          {
            mex: 'Ricordati di dargli da mangiare',
            dataOraMex: '10/01/2020 15:50:00',
            invOric: 'inviato',
            colore: 'mexVerde'
          },
          {
            mex: 'Tutto fatto!',
            dataOraMex: '10/01/2020 16:15:22',
            invOric: 'ricevuto',
            colore: 'mexBianco'
          }
        ]
      },
      {
        nome: 'Fabio',
        immagine: 'img/avatar_2.jpg',
        attivo: true,
        messaggi: [
          {
            mex: 'Ciao come stai?',
            dataOraMex: '10/01/2020 16:30:50',
            invOric: 'inviato',
            colore: 'mexVerde'
          },
          {
            mex: 'Bene grazie! Stasera ci vediamo?',
            dataOraMex: '10/01/2020 16:30:55',
            invOric: 'ricevuto',
            colore: 'mexBianco'
          },
          {
            mex: '  Mi piacerebbe ma devo andare a fare la spesa.',
            dataOraMex: '10/01/2020 16:35:00',
            invOric: 'inviato',
            colore: 'mexVerde'
          }
        ]
      },
      {
        nome: 'Samuele',
        immagine: 'img/avatar_3.jpg',
        attivo: true,
        messaggi: [
          {
            mex: 'La Marianna va in campagna',
            dataOraMex: '28/03/2020 10:10:40',
            invOric: 'ricevuto',
            colore: 'mexBianco'
          },
          {
            mex: 'Sicuro di non aver sbagliato chat?',
            dataOraMex: '28/03/2020 10:20:10',
            invOric: 'inviato',
            colore: 'mexVerde'
          },
          {
            mex: 'Ah Scusa!',
            dataOraMex: '28/03/2020 16:15:22',
            invOric: 'ricevuto',
            colore: 'mexBianco'
          }
        ]
      },
      {
        nome: 'Luisa',
        immagine: 'img/avatar_2.jpg',
        attivo: true,
        messaggi: [
          {
            mex: 'Lo sai che ha aperto una nuova pizzeria?',
            dataOraMex: '10/01/2020 15:30:55',
            invOric: 'inviato',
            colore: 'mexVerde'
          },
          {
            mex: 'Si, ma preferirei andare al cinema',
            dataOraMex: '10/01/2020 15:50:00',
            invOric: 'ricevuto',
            colore: 'mexBianco'
          }
        ]
      },
    ]
  },//FINE DATA

  methods: {
    // questa era la funzione in slider che associava l'indice per far attivare la classe
    selezionaChat: function(i) {
      this.contattiIndice = i
    },


    // messaggiRicevuti: contatti4.filter(function(hero) {
    //   return hero.franchise == “Marvel”;
    // });

    // mostraLastDataOraMex: function(contatto) {
    //   if () {
    //
    //   }
    //   return dataOra;
    // }
  }

})
