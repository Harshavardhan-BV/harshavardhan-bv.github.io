var f_name='harshavardhan',l_name='bv',mail='live.com';

function hyperClick(type){
    switch (type) {
        case 'email': link='mailto:'+l_name+'_'+f_name+'@'+mail;target="_self";
        break;
    }
    window.open(link, target);
}