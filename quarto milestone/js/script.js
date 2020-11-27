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
    ],

    testoNuovoMessaggio: '',//aggiungo un dato vuoto da riempire con il messaggio che viene compilato dall'utente nella chat bar

    rispostaNuovoMessaggio: '', // riempito con il contenuto della funzione rispostaAutomatica

    modelloRicercaContatto: ''//viene riempito dal testo che scrivo nella barra di ricerca


  },//FINE DATA

  methods: {
    // questa era la funzione in slider che associava l'indice per far attivare la classe
    selezionaChat: function(i) {
      this.contattiIndice = i
    },

    oraDataNuovoMex: function () {
      //setto il momento attuale
      let adesso = new Date();
      // //trovo giorno mese anno
      let gg = adesso.getDate();
      let mm = adesso.getMonth() + 1;
      let yyyy = adesso.getFullYear();
      let orario = adesso.toLocaleTimeString();;
      //li metto assieme
      let asd = (gg + '/' + mm + '/' + yyyy + ' ' + orario);
      return asd;
    },

    inviaMessaggio: function(i) {
      //cre una variabile che contiene il nuovo messaggio, con testo inserito e caratteristiche varie
      let testoNuovoMessaggio = {
        mex: this.testoNuovoMessaggio, //preso dal v-model
        dataOraMex: this.oraDataNuovoMex(),
        invOric: 'inviato',
        colore: 'mexVerde'
      }
      this.contatti4[i].messaggi.push(testoNuovoMessaggio);
      this.testoNuovoMessaggio = ''; //classica stringa per svuotare il vmodel dopo invio messaggio.
      //adesso dobbiamo mettere sempre qua dentro, una funzione che rimanda dopo 1 secondo un messaggio con testo preimpostato
      this.rispostaAutomatica(i);
      // ALTERNATIVA era attivarsi al click o al premere invio
      //funziona anche se metto app invece di this
    },

    rispostaAutomatica: function(i) {
      let conversazioneInCorso = this.contatti4[i];
      setTimeout(
        ()=> {//senza usare arrow functiojn usare app invece di this in dataOraMex
          let rispostaNuovoMessaggio =
          {
            mex: 'sisi ok basta che stai zitto',
            dataOraMex: this.oraDataNuovoMex(),
            invOric: 'ricevuto',
            colore: 'mexBianco'
          }
          conversazioneInCorso.messaggi.push(rispostaNuovoMessaggio);
          this.scroll();

        },
      1000)

    },


    // scrollDown: function() {
    //   setTimeout(
    //     ()=>{
    //       let chat = document.getElementById("chatXY");
    //       chat.scrollTop = chat.scrollHeight;
    //     },
    //   1)
    // },

    // setTimeout(() => (this.getTime(),this.users[this.selected].chat.push({...this.cpuMsg}),this.scrollAuto()), 1000);



    scrollToEnd: function() {
      let chat = this.$el.querySelector("#chatXY");
      chat.scrollTop = chat.scrollHeight;
      console.log(chat);
    },

    scroll: function() {
      setTimeout(this.scrollToEnd, 0);
    },
    // io l'ho divisa in due funzioni
    // e dentro la risposta automatica ho messo this.scroll();
    //







    // mostraLastDataOraMex: function(contatto) {
    //   if () {
    //
    //   }
    //   return dataOra;
    // }


    //----------------------------------------------------------
    //4 milestone   cerca contatto nella search background
    cercaConversazione: function() {
      let modelloRicercaContatto = this.modelloRicercaContatto.toLowerCase();  this.contatti4.forEach((element) => {
        if(element.nome.toLowerCase().includes(modelloRicercaContatto)) {
          element.attivo = true;
        } else {
          element.attivo = false;
        };
      });
    },

  }

});

// function scrollBarBottom() {
//   setTimeout(function() {
//       let chat = document.getElementById('chat');
//
//       chat.scrollTop = chat.scrollHeight - chat.clientHeight;
//
//   }, 100);
// }
