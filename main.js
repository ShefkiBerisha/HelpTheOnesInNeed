let btnOpen = document.QuerySelector('button');
let site = ('https://support.savethechildren.org/site/Donation2?df_id=1620&1620.donation=form1')

btnOpen.addEventListner('click', () => {
  window.open(site)
});