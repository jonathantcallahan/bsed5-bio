$( document ).ready(function(){
    const clock = {
        update: () => {
            const d = new Date(), 
                year = d.getFullYear(),
                month = d.getMonth(),
                day = d.getDate(),
                hour = d.getHours(),
                minute = d.getMinutes(),
                second = d.getSeconds(),
                ms = d.getMilliseconds();
            let ums = `${ms}`
            while(ums.length<3) ums = `0${ums}`
            $('.clock-date').text(`${year} ${month} ${day}`);
            $('.clock-time').text(`${hour} ${minute} ${second} ${ums}`)
        }
    };
    
    
    setInterval(clock.update, 5)
    const printloc = loc => $('.clock-coordinates').text(`${loc.coords.latitude || 'xxxxxxxx'} ${loc.coords.longitude || 'xxxxxxxx'}`)
    //navigator.geolocation.getCurrentPosition(printloc)
    
    const projects = {
        list: {},
        getProjects: (cb = ()=>{}) => $.get('/api/projects', data => {projects.list = data; cb('project-1')} ),
        updateProjects: project => {
            $('.project-title-selected').removeClass('project-title-selected')
            $('#' + project).toggleClass('project-title-selected')
            const data = projects.list[project]
            $('.content-block-title').text(data.title)
            $('.content-block-link').attr('href', data.link)
            $('.content-block-github').attr('href', data.github)
            $('.content-block-description').text(data.description)
            const i = (src, device) => `<img class='content-block-image ${device}-image' src='${src}'>`
            $('.content-block-mobile-images, .content-block-desktop-images').empty()
            data.images.mobile.forEach(e => $('.content-block-mobile-images').append(i(e,'mobile')))
            data.images.desktop.forEach(e => $('.content-block-desktop-images').append(i(e,'desktop')))
        }
    }
    $('.project-title').click(function(){
        projects.updateProjects($(this).attr('id'))
    })
    projects.getProjects(projects.updateProjects)
    $('.content-block-contact-view-resume').click(function(){
        $('.content-block-resume').toggle()
        const hide = $(this).hasClass('hide')
        $(this).text(hide ? 'CLICK TO VIEW AS IFRAME' : 'HIDE IFRAME').toggleClass('hide')
    })
})
