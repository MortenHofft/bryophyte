(this["webpackJsonpgbif-react-components"]=this["webpackJsonpgbif-react-components"]||[]).push([[0],{43:function(n,e,t){n.exports=t(51)},48:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),u=t(32),a=t.n(u),c=(t(48),t(3)),i=t(5),s=t(1),m=t(4);function l(){var n=Object(c.a)(['\n          font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n          color: ',";\n          font-size: ",";\n          font-weight: 400;\n          line-height: 1.5;\n          box-sizing: border-box;\n          background: ",";\n          *, *::before, *::after, strong {\n            box-sizing: inherit;\n          }\n      "]);return l=function(){return n},n}var y=function(n){var e=n.as,t=Object(i.a)(n,["as"]),r=Object(m.b)();return Object(s.c)(e,Object.assign({css:Object(s.b)(l(),r.color||"#4a4a4a",r.fontSize||"1em",r.background||"white")},t))};y.displayName="Root",y.defaultProps={as:"div"};var b=y,d=t(25),f=t(36),p=o.a.createContext({}),O=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(n){};return function(e){return function(t){return o.a.createElement(p.Consumer,null,(function(r){return o.a.createElement(e,Object.assign({},n(r),t))}))}}},g=t(30),v=t(26),h=t(17),j=t(35),S="\n    -webkit-touch-callout: none;\n    user-select: none;\n  ";function M(){var n=Object(c.a)(["\n          align-items: center;\n          margin: 0;\n          padding: 0;\n          border-bottom-color: #dbdbdb;\n          border-bottom-style: solid;\n          border-bottom-width: 2px;\n          display: flex;\n          flex-grow: 1;\n          flex-shrink: 0;\n          justify-content: flex-start;\n        "]);return M=function(){return n},n}function N(){var n=Object(c.a)(["\n        ","\n        -webkit-overflow-scrolling: touch;\n        align-items: stretch;\n        display: flex;\n        font-size: 1em;\n        justify-content: space-between;\n        overflow: hidden;\n        overflow-x: auto;\n        white-space: nowrap;\n      "]);return N=function(){return n},n}function I(){var n=Object(c.a)(["\n      align-items: center;\n      border-bottom-color: #dbdbdb;\n      border-bottom-style: solid;\n      color: #4a4a4a;\n      display: flex;\n      justify-content: center;\n      margin-bottom: -2px;\n      padding: 0.5em 1em;\n      vertical-align: top;\n      background: none;\n      border-width: 0 0 2px 0;\n      font-size: 1em;\n      &:hover {\n        border-bottom-color: #363636;\n        color: #363636;\n      }\n      ","\n    "]);return I=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: block;\n"]);return C=function(){return n},n}h.a.li(C());function x(n){var e;return function(n,e){var t=0;o.a.Children.forEach(n,(function(n){o.a.isValidElement(n)&&e(n,t++)}))}(n,(function(n){null==e&&(e=n.props.eventKey)})),e}var A=function(n){var e=Object(j.a)(n,{activeKey:"onSelect"}),t=e.children,u=(e.onSelect,e.activeKey),a=void 0===u?x(t):u,c=Object(i.a)(e,["children","onSelect","activeKey"]);console.log(a);var l=Object(r.useState)(a),y=Object(d.a)(l,2);y[0],y[1],Object(m.b)();return Object(s.c)("nav",Object.assign({css:Object(s.b)(N(),S)},c),Object(s.c)("ul",{role:"tablist",css:Object(s.b)(M())},function(n,e){var t=0;return o.a.Children.map(n,(function(n){return o.a.isValidElement(n)?e(n,t++):n}))}(t,(function(n){return function(n){var e=n.props,t=e.eventKey,r=e.disabled,o=e.tabClassName;return Object(s.c)("li",{disabled:r,className:o,role:"tab",onClick:function(n){return console.log(t)}},n)}(n)}))))};A.displayName="Tabs",A.Tab=function(n){var e=n.active,t=n.children,r=(n.eventKey,n.onClick),o=Object(i.a)(n,["active","children","eventKey","onClick"]),u=Object(m.b)();return Object(s.c)("a",Object.assign({role:"tab",css:Object(s.b)(I(),e?"\n        border-bottom-color: ".concat(u.colors.primary500,";\n        color: ").concat(u.colors.primary500,";\n      "):""),onClick:function(n){return r(o.tabKey)}},o),t)};var k=A;function B(){var n=Object(c.a)(["\n  &:after {\n    animation: ",' 500ms infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: "";\n    display: block;\n    height: 1em;\n    position: relative;\n    width: 1em;\n\n    position: absolute;\n    left: calc(50% - (1em / 2));\n    top: calc(50% - (1em / 2));\n    position: absolute !important;\n  }\n  color: transparent !important;\n  pointer-events: none;\n']);return B=function(){return n},n}function w(){var n=Object(c.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"]);return w=function(){return n},n}function E(){var n=Object(c.a)(["\n  display: flex; \n  width: 100%;\n"]);return E=function(){return n},n}function T(){var n=Object(c.a)(["\n  border-color: transparent;\n  background: none;\n"]);return T=function(){return n},n}function R(){var n=Object(c.a)(["\n  background: tomato;\n  color: white;\n"]);return R=function(){return n},n}function G(){var n=Object(c.a)(["\n  border-color: #808080;\n  color: #808080;\n  background: none;\n"]);return G=function(){return n},n}function P(){var n=Object(c.a)(["\n  border-color: ",";\n  background: none;\n"]);return P=function(){return n},n}function K(){var n=Object(c.a)(["\n  border-color: ",";\n  background: none;\n  color: ",";\n"]);return K=function(){return n},n}function L(){var n=Object(c.a)(["\n  background-color: ",";\n  color: white;\n  &:hover {\n    background-color: ",";\n  }\n"]);return L=function(){return n},n}function F(){var n=Object(c.a)(["\n  ","\n  appearance: none;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  \n  text-align: center;\n  white-space: nowrap;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n\n  font-size: 1em;\n  height: ","em;\n  line-height: calc(1.5em - 6px);\n  position: relative;\n  margin: 0;\n  background-color: white;\n  color: ",";\n  cursor: pointer;\n  justify-content: center;\n  padding-left: ","em;\n  padding-right: ","em;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n  }\n"]);return F=function(){return n},n}var U=Object(s.d)(w()),H={button:function(n){return Object(s.b)(F(),S,n.dense?1.5:2.5,n.color,n.dense?.5:1,n.dense?.5:1)},primary:function(n){return Object(s.b)(L(),n.colors.primary500,n.colors.primary600)},primaryOutline:function(n){return Object(s.b)(K(),n.colors.primary500,n.colors.primary700)},outline:function(n){return Object(s.b)(P(),n.transparentInk40)},ghost:function(n){return Object(s.b)(G())},danger:function(n){return Object(s.b)(R())},link:function(n){return Object(s.b)(T())},loading:function(n){return Object(s.b)(B(),U)},block:function(n){return Object(s.b)(E())}},V=function(n,e,t){var r="".concat(n,"-").concat(e);return t.reduce((function(n,e){return"".concat(n," ").concat(r,"-").concat(e)}),"".concat(r))};function D(){var n=Object(c.a)(["\n        ","\n        ",";\n      "]);return D=function(){return n},n}var z=function(n){var e=n.as,t=n.className,r=void 0===t?"":t,o=n.loading,u=void 0!==o&&o,a=n.block,c=void 0!==a&&a,l=n.type,y=void 0===l?"primary":l,b=Object(i.a)(n,["as","className","loading","block","type"]),d={type:y,loading:u,block:c},f=Object(m.b)(),p=function(n,e,t){var r=[],o=n.prefix||"gbif";return Object.keys(t).forEach((function(n){var e=t[n];!0===e?r.push(n):"string"===typeof e&&r.push(e)})),{humanClasses:V(o,e,r),classesToApply:r}}(f,"button",d),O=p.classesToApply,g=p.humanClasses;return Object(s.c)(e,Object.assign({className:"".concat(g," ").concat(r),css:Object(s.b)(D(),H.button(f),O.map((function(n){return H[n](f)})))},b))};z.displayName="Button",z.defaultProps={as:"button"};var Z=z;function J(){var n=Object(c.a)(["\n  \n"]);return J=function(){return n},n}function W(){var n=Object(c.a)(["margin-right: 4px;"]);return W=function(){return n},n}function Y(){var n=Object(c.a)(["margin-right: 4px;"]);return Y=function(){return n},n}function X(){var n=Object(c.a)(["",""]);return X=function(){return n},n}var Q=function(n){return Object(s.b)(J())},_=O((function(n){return{filter:n.filter,stateApi:n.stateApi}}))((function(n){var e=n.className,t=void 0===e?"":e,r=n.stateApi,o=Object(i.a)(n,["className","stateApi"]),u=Object(m.b)(),a=u.prefix||"gbif";return Object(s.c)("div",Object.assign({className:"".concat(t," ").concat(a,"-").concat("filterBar"),css:Object(s.b)(X(),Q(u))},o),Object(s.c)(Z,{css:Object(s.b)(Y())},"Species or group"),Object(s.c)(Z,{type:"outline",css:Object(s.b)(W()),onClick:function(n){return r.updateFilter({update:"fromFilter"})}},"Button"),JSON.stringify(o.filter,null,2))}));function q(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  .","-","-navBar {\n    flex: 0 0 auto;\n    flex-direction: column;\n    display: flex;\n  }\n  .","-","-filters {\n    border-bottom: 1px solid #2a2a38;\n    padding: 8px;\n  }\n  .","-","-views {\n    \n  }\n  .","-","-body {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n  }\n  .","-","-main {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    margin: 10;\n  }\n  .","-","-drawer {\n    border-left: 1px solid #2a2a38;\n  }\n  .","-","-footer {\n    flex: 0 0 auto;\n    &>div {\n      border-top: 1px solid #2a2a38;\n      padding: 5px 12px;\n      color: white;\n      font-size: 0.85em;\n      font-weight: 700;\n    }\n  }\n"]);return q=function(){return n},n}function $(){var n=Object(c.a)(["",""]);return $=function(){return n},n}var nn=k.Tab,en=function(n,e,t){return Object(s.b)(q(),e,t,e,t,e,t,e,t,e,t,e,t,e,t)},tn=O((function(n){return{test:n.test}}))((function(n){var e=n.className,t=void 0===e?"":e,o=Object(i.a)(n,["className"]),u=Object(r.useState)("home"),a=Object(d.a)(u,2),c=a[0],l=a[1],y=Object(m.b)(),b=y.prefix||"gbif",p="occurrenceSearchLayout";return Object(s.c)("div",Object.assign({className:"".concat(t," ").concat(b,"-").concat(p),css:Object(s.b)($(),en(y,b,p))},o),Object(s.c)("div",{className:"".concat(b,"-").concat(p,"-navBar")},Object(s.c)("div",{className:"".concat(b,"-").concat(p,"-filters")},Object(s.c)(_,null)),Object(s.c)("div",{className:"".concat(b,"-").concat(p,"-views")},Object(s.c)(k,{activeKey:c,onSelect:function(n){return l(n)}},Object(s.c)(nn,{eventKey:"home"},"Species or Group"),Object(s.c)(nn,{eventKey:"profile"},"Second Option",Object(s.c)(f.a,{style:{marginLeft:8}})),Object(s.c)(nn,{eventKey:"contact",disabled:!0},"third")))),Object(s.c)("div",{className:"".concat(b,"-").concat(p,"-body")},Object(s.c)("div",{className:"".concat(b,"-").concat(p,"-main")},"content ",o.test,Object(s.c)("br",null),Object(s.c)(g.a,{id:"pagination.pageXofY",defaultMessage:"Loading",values:{current:Object(s.c)(v.a,{value:10}),total:Object(s.c)(v.a,{value:2e4})}}))),Object(s.c)("div",{className:"".concat(b,"-").concat(p,"-footer")},Object(s.c)("div",null,"Footer content")))})),rn=t(11),on=t(12),un=t(14),an=t(13),cn=t(15),sn=function(n){function e(n){var t;return Object(rn.a)(this,e),(t=Object(un.a)(this,Object(an.a)(e).call(this,n))).updateFilter=function(n){t.setState({filter:n})},t.state={stateApi:{updateFilter:t.updateFilter},test:10,filter:{must:{datasetKey:["1234-1234-1234-1234"]}}},t}return Object(cn.a)(e,n),Object(on.a)(e,[{key:"render",value:function(){return o.a.createElement(p.Provider,{value:this.state},this.props.children)}}]),e}(o.a.Component);var mn=function(n){return Object(s.c)(sn,null,Object(s.c)(tn,n))};function ln(){var n=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n  flex-grow: 1;\n  margin: 0 0.35em;\n"]);return ln=function(){return n},n}function yn(){var n=Object(c.a)(["\n  ","\n  justify-content: flex-end;\n"]);return yn=function(){return n},n}function bn(){var n=Object(c.a)(["\n  ","\n  justify-content: flex-start;\n"]);return bn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  align-items: center;\n  @media screen and (min-width: 769px), print {\n    display: flex;\n    margin: 0 -0.35em;\n  }\n"]);return dn=function(){return n},n}var fn=Object(s.b)(dn()),pn=h.a.div(bn(),fn),On=h.a.div(yn(),fn),gn=h.a.div(ln());function vn(){var n=Object(c.a)(["\n        align-items: center;\n        justify-content: space-between;\n        background: ",";\n        img {\n          display: inline-block;\n          vertical-align: top;\n        }\n        @media screen and (min-width: 769px), print {\n          display: flex;\n        }\n      "]);return vn=function(){return n},n}var hn=function(n){var e=n.as,t=Object(i.a)(n,["as"]),r=Object(m.b)();return Object(s.c)(e,Object.assign({css:Object(s.b)(vn(),r.paperBackground)},t))};hn.displayName="Level",hn.defaultProps={as:"nav"},hn.Item=gn,hn.Left=pn,hn.Right=On;var jn=t(27),Sn={locale:"en",messages:{first:"First",previous:"Previous",next:"Next",options:"Options","appMenu.table":"Table","appMenu.gallery":"Images","appMenu.map":"Map","pagination.pageXofY":"Page {current} of {total}",noResultsForX:"No suggestions for '{str}'","enum.basisOfRecord.PRESERVED_SPECIMEN":"Preserved specimen","enum.basisOfRecord.FOSSIL_SPECIMEN":"Fossil specimen","enum.basisOfRecord.LIVING_SPECIMEN":"Living specimen","enum.basisOfRecord.OBSERVATION":"Observation","enum.basisOfRecord.HUMAN_OBSERVATION":"Human observation","enum.basisOfRecord.MACHINE_OBSERVATION":"Machine observation","enum.basisOfRecord.MATERIAL_SAMPLE":"Material sample","enum.basisOfRecord.LITERATURE":"Literature","enum.basisOfRecord.UNKNOWN":"Unknown","enum.country.AF":"Afghanistan","enum.country.AX":"\xc5land Islands","enum.country.AL":"Albania","enum.country.DZ":"Algeria","enum.country.AS":"American Samoa","enum.country.AD":"Andorra","enum.country.AO":"Angola","enum.country.AI":"Anguilla","enum.country.AQ":"Antarctica","enum.country.AG":"Antigua and Barbuda","enum.country.AR":"Argentina","enum.country.AM":"Armenia","enum.country.AW":"Aruba","enum.country.AU":"Australia","enum.country.AT":"Austria","enum.country.AZ":"Azerbaijan","enum.country.BS":"Bahamas","enum.country.BH":"Bahrain","enum.country.BD":"Bangladesh","enum.country.BB":"Barbados","enum.country.BY":"Belarus","enum.country.BE":"Belgium","enum.country.BZ":"Belize","enum.country.BJ":"Benin","enum.country.BM":"Bermuda","enum.country.BT":"Bhutan","enum.country.BO":"Bolivia, Plurinational State of","enum.country.BA":"Bosnia and Herzegovina","enum.country.BW":"Botswana","enum.country.BV":"Bouvet Island","enum.country.BR":"Brazil","enum.country.BQ":"Bonaire, Sint Eustatius and Saba","enum.country.IO":"British Indian Ocean Territory","enum.country.BN":"Brunei Darussalam","enum.country.BG":"Bulgaria","enum.country.BF":"Burkina Faso","enum.country.BI":"Burundi","enum.country.KH":"Cambodia","enum.country.CM":"Cameroon","enum.country.CA":"Canada","enum.country.CV":"Cabo Verde","enum.country.KY":"Cayman Islands","enum.country.CF":"Central African Republic","enum.country.TD":"Chad","enum.country.CL":"Chile","enum.country.CN":"China","enum.country.CX":"Christmas Island","enum.country.CC":"Cocos (Keeling) Islands","enum.country.CO":"Colombia","enum.country.KM":"Comoros","enum.country.CG":"Congo","enum.country.CD":"Congo, The Democratic Republic of the","enum.country.CK":"Cook Islands","enum.country.CR":"Costa Rica","enum.country.CI":"C\xf4te d\u2019Ivoire","enum.country.HR":"Croatia","enum.country.CU":"Cuba","enum.country.CW":"Cura\xe7ao","enum.country.CY":"Cyprus","enum.country.CZ":"Czechia","enum.country.DK":"Denmark","enum.country.DJ":"Djibouti","enum.country.DM":"Dominica","enum.country.DO":"Dominican Republic","enum.country.EC":"Ecuador","enum.country.EG":"Egypt","enum.country.SV":"El Salvador","enum.country.GQ":"Equatorial Guinea","enum.country.ER":"Eritrea","enum.country.EE":"Estonia","enum.country.ET":"Ethiopia","enum.country.FK":"Falkland Islands (Malvinas)","enum.country.FO":"Faroe Islands","enum.country.FJ":"Fiji","enum.country.FI":"Finland","enum.country.FR":"France","enum.country.GF":"French Guiana","enum.country.PF":"French Polynesia","enum.country.TF":"French Southern Territories","enum.country.GA":"Gabon","enum.country.GM":"Gambia","enum.country.GE":"Georgia","enum.country.DE":"Germany","enum.country.GH":"Ghana","enum.country.GI":"Gibraltar","enum.country.GR":"Greece","enum.country.GL":"Greenland","enum.country.GD":"Grenada","enum.country.GP":"Guadeloupe","enum.country.GU":"Guam","enum.country.GT":"Guatemala","enum.country.GG":"Guernsey","enum.country.GN":"Guinea","enum.country.GW":"Guinea-Bissau","enum.country.GY":"Guyana","enum.country.HT":"Haiti","enum.country.HM":"Heard Island and Mcdonald Islands","enum.country.VA":"Holy See","enum.country.HN":"Honduras","enum.country.HK":"Hong Kong","enum.country.HU":"Hungary","enum.country.IS":"Iceland","enum.country.IN":"India","enum.country.ID":"Indonesia","enum.country.IR":"Iran, Islamic Republic Of","enum.country.IQ":"Iraq","enum.country.IE":"Ireland","enum.country.IM":"Isle of Man","enum.country.IL":"Israel","enum.country.IT":"Italy","enum.country.JM":"Jamaica","enum.country.JP":"Japan","enum.country.JE":"Jersey","enum.country.JO":"Jordan","enum.country.KZ":"Kazakhstan","enum.country.KE":"Kenya","enum.country.KI":"Kiribati","enum.country.KP":"Korea, Democratic People\u2019s Republic of","enum.country.KR":"Korea, Republic of","enum.country.XK":"Kosovo","enum.country.KW":"Kuwait","enum.country.KG":"Kyrgyzstan","enum.country.LA":"Lao People\u2019s Democratic Republic","enum.country.LV":"Latvia","enum.country.LB":"Lebanon","enum.country.LS":"Lesotho","enum.country.LR":"Liberia","enum.country.LY":"Libya","enum.country.LI":"Liechtenstein","enum.country.LT":"Lithuania","enum.country.LU":"Luxembourg","enum.country.MO":"Macao","enum.country.MK":"Macedonia, The Former Yugoslav Republic of","enum.country.MG":"Madagascar","enum.country.MW":"Malawi","enum.country.MY":"Malaysia","enum.country.MV":"Maldives","enum.country.ML":"Mali","enum.country.MT":"Malta","enum.country.MH":"Marshall Islands","enum.country.MQ":"Martinique","enum.country.MR":"Mauritania","enum.country.MU":"Mauritius","enum.country.YT":"Mayotte","enum.country.MX":"Mexico","enum.country.FM":"Micronesia, Federated States of","enum.country.MD":"Moldova, Republic of","enum.country.MC":"Monaco","enum.country.MN":"Mongolia","enum.country.ME":"Montenegro","enum.country.MS":"Montserrat","enum.country.MA":"Morocco","enum.country.MZ":"Mozambique","enum.country.MM":"Myanmar","enum.country.NA":"Namibia","enum.country.NR":"Nauru","enum.country.NP":"Nepal","enum.country.NL":"Netherlands","enum.country.AN":"Netherlands Antilles","enum.country.NC":"New Caledonia","enum.country.NZ":"New Zealand","enum.country.NI":"Nicaragua","enum.country.NE":"Niger","enum.country.NG":"Nigeria","enum.country.NU":"Niue","enum.country.NF":"Norfolk Island","enum.country.MP":"Northern Mariana Islands","enum.country.NO":"Norway","enum.country.OM":"Oman","enum.country.PK":"Pakistan","enum.country.PW":"Palau","enum.country.PS":"Palestine, State of","enum.country.PA":"Panama","enum.country.PG":"Papua New Guinea","enum.country.PY":"Paraguay","enum.country.PE":"Peru","enum.country.PH":"Philippines","enum.country.PN":"Pitcairn","enum.country.PL":"Poland","enum.country.PT":"Portugal","enum.country.PR":"Puerto Rico","enum.country.QA":"Qatar","enum.country.RE":"R\xe9union","enum.country.RO":"Romania","enum.country.RU":"Russian Federation","enum.country.RW":"Rwanda","enum.country.SH":"Saint Helena, Ascension and Tristan da Cunha","enum.country.KN":"Saint Kitts and Nevis","enum.country.LC":"Saint Lucia","enum.country.BL":"Saint Barth\xe9lemy","enum.country.MF":"Saint Martin (French part)","enum.country.PM":"Saint Pierre and Miquelon","enum.country.VC":"Saint Vincent and the Grenadines","enum.country.WS":"Samoa","enum.country.SM":"San Marino","enum.country.ST":"Sao Tome and Principe","enum.country.SA":"Saudi Arabia","enum.country.SN":"Senegal","enum.country.RS":"Serbia","enum.country.SC":"Seychelles","enum.country.SL":"Sierra Leone","enum.country.SG":"Singapore","enum.country.SX":"Sint Maarten (Dutch part)","enum.country.SK":"Slovakia","enum.country.SI":"Slovenia","enum.country.SB":"Solomon Islands","enum.country.SO":"Somalia","enum.country.ZA":"South Africa","enum.country.GS":"South Georgia and the South Sandwich Islands","enum.country.ES":"Spain","enum.country.LK":"Sri Lanka","enum.country.SD":"Sudan","enum.country.SR":"Suriname","enum.country.SS":"South Sudan","enum.country.SJ":"Svalbard and Jan Mayen","enum.country.SZ":"Eswatini","enum.country.SE":"Sweden","enum.country.CH":"Switzerland","enum.country.SY":"Syrian Arab Republic","enum.country.TW":"Taiwan","enum.country.TJ":"Tajikistan","enum.country.TZ":"Tanzania, United Republic of","enum.country.TH":"Thailand","enum.country.TL":"Timor-Leste","enum.country.TG":"Togo","enum.country.TK":"Tokelau","enum.country.TO":"Tonga","enum.country.TT":"Trinidad and Tobago","enum.country.TN":"Tunisia","enum.country.TR":"Turkey","enum.country.TM":"Turkmenistan","enum.country.TC":"Turks and Caicos Islands","enum.country.TV":"Tuvalu","enum.country.UG":"Uganda","enum.country.UA":"Ukraine","enum.country.AE":"United Arab Emirates","enum.country.GB":"United Kingdom","enum.country.US":"United States of America","enum.country.UM":"United States Minor Outlying Islands","enum.country.UY":"Uruguay","enum.country.UZ":"Uzbekistan","enum.country.VU":"Vanuatu","enum.country.VE":"Venezuela, Bolivarian Republic of","enum.country.VN":"Viet Nam","enum.country.VG":"Virgin Islands, British","enum.country.VI":"Virgin Islands, U.S.","enum.country.WF":"Wallis and Futuna","enum.country.EH":"Western Sahara","enum.country.YE":"Yemen","enum.country.ZM":"Zambia","enum.country.XZ":"International waters","enum.country.ZW":"Zimbabwe","enum.country.QO":"Oceania","enum.country.ZZ":"Unknown country"}},Mn=function(n,e){var t=parseInt(n.slice(1),16),r=e<0?0:255,o=e<0?-1*e:e,u=t>>16,a=t>>8&255,c=255&t;return"#"+(16777216+65536*(Math.round((r-u)*o)+u)+256*(Math.round((r-a)*o)+a)+(Math.round((r-c)*o)+c)).toString(16).slice(1)},Nn={},In=function(n){var e=Object.assign({},Nn,n);return e.colors.primary500=n.colors.primary,e.colors.primary600=Mn(e.colors.primary500,-.05),e.colors.primary700=Mn(e.colors.primary500,-.1),e.transparentInk40="".concat(e.color,"40"),e.transparentInk60="".concat(e.color,"60"),e.transparentInk20="".concat(e.color,"20"),e.transparentInk80="".concat(e.color,"80"),e.transparentInk50="".concat(e.color,"50"),e}({colors:{primary:"#1ea7fd"},fontSize:"16px",background:"#efefef",paperBackground:"#ffffff",color:"#4a4a4a"});var Cn=function(){return o.a.createElement(m.a,{theme:In},o.a.createElement(jn.a,{locale:"en",messages:Sn.messages},o.a.createElement(b,null,o.a.createElement(mn,{style:{height:"100vh"}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(Cn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.fd8b9bba.chunk.js.map