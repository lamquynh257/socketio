//edit device
  $(document).ready(function () {
    $('.editdata').on('click', function(){
      $('#editmodal').modal('show');
        $tr = $(this).closest('tr');
        var data = $tr.children('td').map(function(){
            return $(this).text();
        }).get();
        //console.log(data);
        $('#idupdate').val(data[1]);
        $('#CoSo').val(data[2]);
        $('#TenThietBi').val(data[3]);
        $('#DuongDan').val(data[4]);
        $('#User').val(data[5]);
       // $('#Password').val(data[6]);
    });
  });


//edit văn bản
  $(document).ready(function () {
    $('.edittotrinh').on('click', function(){
      $('#edittotrinh').modal('show');
        $tr = $(this).closest('tr');
        var data = $tr.children('td').map(function(){
            return $(this).text();
        }).get();
        console.log(data);
        $('#idtotrinh').val(data[1]);
        $('#mavanban').val(data[2]);
        $('#tenvanban').val(data[3]);
        $('#loai').val(data[4]);
        $('#nhantu').val(data[5]);
        $('#ngaynhan').val(data[6]);
        $('#trangthai').val(data[7]);
        $('#ghichu').val(data[8]);
        $('#files').val(data[9]);
       // $('#Password').val(data[6]);
    });
  });

//edit thiết bị
$(document).ready(function () {
    $('.editthietbi').on('click', function(){
      $('#editthietbi').modal('show');
        $tr = $(this).closest('tr');
        var data = $tr.children('td').map(function(){
            return $(this).text();
        }).get();
        console.log(data);
        $('#idthietbi').val(data[1]);
        $('#tenmay').val(data[2]);
        $('#model').val(data[3]);
        $('#hang').val(data[4]);
        $('#os').val(data[5]);
        $('#cpu').val(data[6]);
        $('#ram').val(data[7]);
        $('#coso').val(data[8]);
        $('#phongban').val(data[9]);
        $('#vitri').val(data[10]);
        $('#servicetag').val(data[11]);
       // $('#Password').val(data[6]);
    });
  });

//Tool export tờ trình
  $(function () {
    $("#listtotrinh").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#listtotrinh_wrapper .col-md-6:eq(0)');
    $('#listtotrinh2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });

  //Tool export device
  $(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });

  $("ul.nav.nav-treeview li.nav-item").on("click", function() {
    $("ul.nav.nav-pills.nav-sidebar.flex-column li.nav-item").removeClass("active");
    $(this).addClass("active");
  });

  //Calendarfull
  $(function () {

    /* initialize the external events
     -----------------------------------------------------------------*/
    function ini_events(ele) {
      ele.each(function () {

        // create an Event Object (https://fullcalendar.io/docs/event-object)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()) // use the element's text as the event title
        }

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject)

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex        : 1070,
          revert        : true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        })

      })
    }

    ini_events($('#external-events div.external-event'))

    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()

    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;

    var containerEl = document.getElementById('external-events');
    var checkbox = document.getElementById('drop-remove');
    var calendarEl = document.getElementById('calendar');

    // initialize the external events
    // -----------------------------------------------------------------

    new Draggable(containerEl, {
      itemSelector: '.external-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText,
          backgroundColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
          borderColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
          textColor: window.getComputedStyle( eventEl ,null).getPropertyValue('color'),
        };
      }
    });

    var calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left  : 'prev,next today',
        center: 'title',
        right : 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      themeSystem: 'bootstrap',
      //Random default events
      events: [
        {
          title          : 'All Day Event',
          start          : new Date(y, m, 1),
          backgroundColor: '#f56954', //red
          borderColor    : '#f56954', //red
          allDay         : true
        },
        {
          title          : 'Long Event',
          start          : new Date(y, m, d - 5),
          end            : new Date(y, m, d - 2),
          backgroundColor: '#f39c12', //yellow
          borderColor    : '#f39c12' //yellow
        },
        {
          title          : 'Meeting',
          start          : new Date(y, m, d, 10, 30),
          allDay         : false,
          backgroundColor: '#0073b7', //Blue
          borderColor    : '#0073b7' //Blue
        },
        {
          title          : 'Lunch',
          start          : new Date(y, m, d, 12, 0),
          end            : new Date(y, m, d, 14, 0),
          allDay         : false,
          backgroundColor: '#00c0ef', //Info (aqua)
          borderColor    : '#00c0ef' //Info (aqua)
        },
        {
          title          : 'Birthday Party',
          start          : new Date(y, m, d + 1, 19, 0),
          end            : new Date(y, m, d + 1, 22, 30),
          allDay         : false,
          backgroundColor: '#00a65a', //Success (green)
          borderColor    : '#00a65a' //Success (green)
        },
        {
          title          : 'Click for Google',
          start          : new Date(y, m, 28),
          end            : new Date(y, m, 29),
          url            : 'https://www.google.com/',
          backgroundColor: '#3c8dbc', //Primary (light-blue)
          borderColor    : '#3c8dbc' //Primary (light-blue)
        }
      ],
      editable  : true,
      droppable : true, // this allows things to be dropped onto the calendar !!!
      drop      : function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }
    });

    calendar.render();
    // $('#calendar').fullCalendar()

    /* ADDING EVENTS */
    var currColor = '#3c8dbc' //Red by default
    // Color chooser button
    $('#color-chooser > li > a').click(function (e) {
      e.preventDefault()
      // Save color
      currColor = $(this).css('color')
      // Add color effect to button
      $('#add-new-event').css({
        'background-color': currColor,
        'border-color'    : currColor
      })
    })
    $('#add-new-event').click(function (e) {
      e.preventDefault()
      // Get value and make sure it is not null
      var val = $('#new-event').val()
      if (val.length == 0) {
        return
      }

      // Create events
      var event = $('<div />')
      event.css({
        'background-color': currColor,
        'border-color'    : currColor,
        'color'           : '#fff'
      }).addClass('external-event')
      event.text(val)
      $('#external-events').prepend(event)

      // Add draggable funtionality
      ini_events(event)

      // Remove event from text input
      $('#new-event').val('')
    })
  })
  
 //calculator
 document.addEventListener("DOMContentLoaded", function(event) {
let body = document.querySelector('body');
let result = document.querySelector('#result');

let dark_mode_btn = document.querySelector('.dark_mode_btn');
let clear = document.querySelector('#clear');
let history = document.querySelector('#history');
let equalTo = document.querySelector('#equalTo');
let delete_single_num = document.querySelector('#delete_single_num');

let Normal_btn = document.querySelectorAll('#Normal_btn');


let initial_value = "";

Normal_btn.forEach((Normal_btn, index)=>{
Normal_btn.addEventListener('click', function(){
let text = this.innerHTML;
initial_value += text;
result.innerHTML = initial_value;
});
});

/*equal to button action*/
equalTo.addEventListener('click', function(){
if (result.innerHTML != "") {
history.innerHTML = result.innerHTML;
result.innerHTML = eval(result.innerHTML);
initial_value = eval(result.innerHTML);
}else{
alert('please enter any Number');
}
});


/*dark_mode*/
let dark_mode_status = false;
dark_mode_btn.addEventListener('click', function(){
body.classList.toggle('dark_mode_active');
if (dark_mode_status == false) {
this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
dark_mode_status = true;
}else{
this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
dark_mode_status = false;
}
});


/*clear all number*/
clear.addEventListener('click', function(){
result.innerHTML = "";
initial_value = "";
});

/*delete single number*/
delete_single_num.addEventListener('click', function(){
result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
initial_value = result.innerHTML;
});

});