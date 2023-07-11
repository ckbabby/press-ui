export default {
  name: 'Nom',
  tel: 'Telephone',
  save: 'Sauvegarder',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  delete: 'Suprimer',
  complete: 'Terminé',
  loading: 'Chargement...',
  telEmpty: 'Veuillez remplir le tel',
  nameEmpty: 'Veuillez remplir le nom',
  nameInvalid: 'Nom incorrect',
  confirmDelete: 'Êtes-vous sûr de vouloir supprimer?',
  telInvalid: 'Numéro de téléphone incorrect',
  reply: 'Reply',
  calendar: {
    end: 'Fin',
    start: 'Début',
    title: 'Calendrier',
    startEnd: 'Début/Fin',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: maxRange => `Choisir pas plus de ${maxRange} jours`,
  },
  dialog: {
    title: 'Rapide',
  },
  scheduleTree: {
    pending: 'Pending',
    emptyTeam: 'Opponent No-Show',
    quitScore: 'Forfeit',
    champion: 'Champion',
    thirdPlace: 'Third Place',
    checkFinal: 'Check Final >',
    groupedChampion: isChampion => (isChampion ? 'Group Champion' : 'Third Place In Group'),

    ended: 'Ended',
    playing: 'Match in Progress...',
    currentBo: (curBo, boType) => `Current: Match (${curBo}/${boType})`,

    joining: 'Joining...',
    joiningAndTimeoutAutoQuit: 'Joining... Timeout Automatic Forfeit',
    startMatchOnTime: 'Starts on MM-dd at hh:mm (UTC±0)',
    endTimeFormat: 'MM-dd at hh:mm',

    startBattleAuto: 'Start When Full',
    startBattleManual: 'Waiting for administrator to start the match',
    startBattleOnTime: 'Scheduled Start',
  },
  scheduleList: {
    finals: 'Grand Finals',
    finalsChampion: 'Champion',
    me: 'Me',

    joinDeadline: 'Dea\\dline: M-d at hh:mm',

    manage: 'Manage',
    spectate: 'Spectate',
    toPlay: 'Play a Match',
    reCap: 'Recap',
    subscribe: 'Subscribe',
    subscribed: 'Subscribed',
  },
};
