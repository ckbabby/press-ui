export default {
  name: 'Nume',
  tel: 'Telefon',
  save: 'Salvează',
  confirm: 'Confirmă',
  cancel: 'Anulează',
  delete: 'Șterge',
  complete: 'Finalizează',
  loading: 'Încărcare...',
  telEmpty: 'Te rugăm să completezi telefonul',
  nameEmpty: 'Te rugăm să completezi numele',
  nameInvalid: 'Nume incorect',
  confirmDelete: 'Ești sigur ca vrei sa stergi?',
  telInvalid: 'Număr de telefon invalid',
  reply: 'Reply',
  calendar: {
    end: 'Sfârșit',
    start: 'Început',
    title: 'Calendar',
    startEnd: 'Început/Sfârsit',
    weekdays: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: maxRange => `Alege maxim ${maxRange} zile`,
  },
  dialog: {
    title: 'Prompt',
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
  actTipDialog: {
    prompt: 'Prompt Description',
  },
};
