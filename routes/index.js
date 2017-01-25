
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Nørdenirvana' });
};

exports.tilmelding = function (req, res) {
    res.render('tilmelding', {
        subpage: 'Tilmelding',
        pagetext: 'TEXTYTEXTTEXT'
    });
};

exports.priser = function (req, res) {
    res.render('priser', {
        subpage: 'Priser'
    });
};

exports.aktiviteter = function (req, res) {
    res.render('aktiviteter', {
        subpage: 'Aktiviteter'
    });
};

exports.kontakt = function (req, res) {
    res.render('kontakt', {
        subpage: 'Kontakt'
    });
};

exports.about = function (req, res){
    res.render('about', {
        subpage: 'Om os'
    })
}

exports.secret = function (req, res) {
    res.render('secret', {
        subpage: 'Secret'
    })
}
