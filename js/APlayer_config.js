const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '一直很安静',
            artist: '阿桑',
            lrc: '/music/lrc/一直很安静-阿桑.lrc',
            cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
            url: 'http://m10.music.126.net/20201013184827/a670dd4c042fb2da7ae171df031103d2/ymusic/070f/045e/0459/0e55df0d9a340cdd7d393391d0737f75.mp3'
                  },
        {
            name: '最平凡的一天',
            artist: '毛不易',
            lrc: '/music/lrc/平凡的一天-毛不易.lrc',
            cover: 'http://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300x300',
            url: 'http://m10.music.126.net/20201013185029/4bb1b20c43910c53e1214d4916536813/ymusic/fc37/186a/5110/682a30f1141c406c3a39a4565ff001b5.mp3'
                  }
        ]
});