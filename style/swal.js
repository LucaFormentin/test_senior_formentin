import Swal from 'sweetalert2'

export const ClimbAlert = Swal.mixin({
  background: '#121212',
  color: '#fff',
  timer: 4000,
  timerProgressBar: true,
  showCancelButton: false,
  showConfirmButton: false,
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: 'Podium cup'
})
