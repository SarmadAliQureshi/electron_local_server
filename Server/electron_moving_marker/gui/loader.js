let timerInterval
var timer=10000;
Swal.fire({
  title: 'Inserting SRT files in database',
  html: 'Please wait....',
  timer: timer,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
  }
})
