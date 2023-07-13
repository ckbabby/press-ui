export default {
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  confirm: 'Bekreft',
  cancel: 'Avbryt',
  delete: 'Slett',
  complete: 'Fullfør',
  loading: 'Laster...',
  telEmpty: 'Vennligst fyll inn telefonnummer',
  nameEmpty: 'Vennligst fyll inn navn',
  nameInvalid: 'Ugyldig navn',
  confirmDelete: 'Er du sikker på at du vil slette?',
  telInvalid: 'Ugyldig telefonnummer',
  reply: 'Reply',
  calendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalendar',
    startEnd: 'Start/Slutt',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: maxRange => `Maks. ${maxRange} dager`,
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
