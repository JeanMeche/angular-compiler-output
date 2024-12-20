import{a as t}from"./chunk-I6ZGTCOL.js";import{a as r}from"./chunk-YZX5E4CU.js";import{a as e}from"./chunk-TZMUKDWT.js";import"./chunk-MWP7BQN7.js";import"./chunk-7YU4XMH5.js";import"./chunk-AORCKNNR.js";import"./chunk-Q7L6LLAK.js";var a=Object.freeze(JSON.parse(`{"displayName":"MDC","injectionSelector":"L:text.html.markdown","name":"mdc","patterns":[{"include":"#component_block"},{"include":"#inline"}],"repository":{"attribute":{"patterns":[{"captures":{"2":{"name":"entity.other.attribute-name.html"},"3":{"patterns":[{"include":"#attribute-interior"}]}},"match":"(([^=><\\\\s]*)(=[\\"]([^\\"]*)([\\"])|[']([^']*)(['])|=[^\\\\s'\\"}]*)?\\\\s*)"}]},"attribute-interior":{"patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^\\\\s=])(?!\\\\s*=)|(?=/?>)","patterns":[{"match":"([^\\\\s\\"'=<>\`/]|/(?!>))+","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.double.html","patterns":[{"include":"#entities"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.single.html","patterns":[{"include":"#entities"}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},"attributes":{"captures":{"1":{"name":"punctuation.definition.tag.start.component"},"3":{"patterns":[{"include":"#attribute"}]},"4":{"name":"punctuation.definition.tag.end.component"}},"match":"(({)([^{]*)(}))","name":"attributes.mdc"},"block":{"patterns":[{"include":"#component_block"},{"include":"text.html.markdown#separator"},{"include":"#heading"},{"include":"#blockquote"},{"include":"#lists"},{"include":"text.html.markdown#fenced_code_block"},{"include":"text.html.markdown#link-def"},{"include":"text.html.markdown#html"},{"include":"#paragraph"}]},"blockquote":{"begin":"(^|\\\\G)[ ]*(>) ?","captures":{"2":{"name":"punctuation.definition.quote.begin.markdown"}},"name":"markup.quote.markdown","patterns":[{"include":"#block"}],"while":"(^|\\\\G)\\\\s*(>) ?"},"component_block":{"begin":"(^|\\\\G)(\\\\s*)(:{2,})(?i:(\\\\w[\\\\w\\\\d-]+)(\\\\s*|\\\\s*({[^{]*}))$)","beginCaptures":{"3":{"name":"punctuation.definition.tag.start.mdc"},"4":{"name":"entity.name.tag.mdc"},"5":{"patterns":[{"include":"#attributes"}]}},"end":"(^|\\\\G)(\\\\2)(\\\\3)\\\\s*$","endCaptures":{"3":{"name":"punctuation.definition.tag.end.mdc"}},"name":"block.component.mdc","patterns":[{"captures":{"2":{"name":"punctuation.definition.tag.end.mdc"}},"match":"(^|\\\\G)\\\\s*([:]{2,})$"},{"include":"#content"}]},"component_inline":{"captures":{"2":{"name":"punctuation.definition.tag.start.component"},"3":{"name":"entity.name.tag.component"},"5":{"patterns":[{"include":"#attributes"}]},"6":{"patterns":[{"include":"#span"}]},"7":{"patterns":[{"include":"#span"}]},"8":{"patterns":[{"include":"#attributes"}]}},"match":"(^|\\\\G|\\\\s+)(:)(?i:(\\\\w[\\\\w\\\\d-]*))(({[^}]*})(\\\\[[^\\\\]]*\\\\])?|(\\\\[[^\\\\]]*\\\\])({[^}]*})?)?\\\\s","name":"inline.component.mdc"},"content":{"begin":"(^|\\\\G)(\\\\s*)(.*)","contentName":"meta.embedded.block.mdc","patterns":[{"begin":"(^|\\\\G)(\\\\s*)(-{3})(\\\\s*)$","end":"(^|\\\\G)(\\\\s*(-{3})(\\\\s*)$)","patterns":[{"include":"source.yaml"}]},{"captures":{"2":{"name":"entity.other.attribute-name.html"},"3":{"name":"comment.block.html"}},"match":"^(\\\\s*)(#[\\\\w\\\\-_]*)\\\\s*(<!--(.*)-->)?$"},{"include":"#block"}],"while":"(^|\\\\G)(?!\\\\s*([:]{2,})\\\\s*$)"},"entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.html"},"912":{"name":"punctuation.definition.entity.html"}},"match":"(&)(?=[a-zA-Z])((a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))|(B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))|(c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))|(d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))|(e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))|(f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))|(G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))|(h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))|(i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))|(j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))|(k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))|(l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))|(M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))|(n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))|(o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))|(p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))|(q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))|(R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))|(s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))|(t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))|(u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))|(v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))|(w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))|(X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))|(y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))|(z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute)))(;)","name":"constant.character.entity.named.$2.html"},{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)#\\\\d+(;)","name":"constant.character.entity.numeric.decimal.html"},{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)#[xX][0-9a-fA-F]+(;)","name":"constant.character.entity.numeric.hexadecimal.html"},{"match":"&(?=[a-zA-Z0-9]+;)","name":"invalid.illegal.ambiguous-ampersand.html"}]},"heading":{"captures":{"1":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.heading.markdown"},"2":{"name":"entity.name.section.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"}]},"3":{"name":"punctuation.definition.heading.markdown"}},"match":"(#{6})\\\\s+(.*?)(?:\\\\s+(#+))?\\\\s*$","name":"heading.6.markdown"},{"captures":{"1":{"name":"punctuation.definition.heading.markdown"},"2":{"name":"entity.name.section.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"}]},"3":{"name":"punctuation.definition.heading.markdown"}},"match":"(#{5})\\\\s+(.*?)(?:\\\\s+(#+))?\\\\s*$","name":"heading.5.markdown"},{"captures":{"1":{"name":"punctuation.definition.heading.markdown"},"2":{"name":"entity.name.section.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"}]},"3":{"name":"punctuation.definition.heading.markdown"}},"match":"(#{4})\\\\s+(.*?)(?:\\\\s+(#+))?\\\\s*$","name":"heading.4.markdown"},{"captures":{"1":{"name":"punctuation.definition.heading.markdown"},"2":{"name":"entity.name.section.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"}]},"3":{"name":"punctuation.definition.heading.markdown"}},"match":"(#{3})\\\\s+(.*?)(?:\\\\s+(#+))?\\\\s*$","name":"heading.3.markdown"},{"captures":{"1":{"name":"punctuation.definition.heading.markdown"},"2":{"name":"entity.name.section.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"}]},"3":{"name":"punctuation.definition.heading.markdown"}},"match":"(#{2})\\\\s+(.*?)(?:\\\\s+(#+))?\\\\s*$","name":"heading.2.markdown"},{"captures":{"1":{"name":"punctuation.definition.heading.markdown"},"2":{"name":"entity.name.section.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"}]},"3":{"name":"punctuation.definition.heading.markdown"}},"match":"(#{1})\\\\s+(.*?)(?:\\\\s+(#+))?\\\\s*$","name":"heading.1.markdown"}]}},"match":"(?:^|\\\\G)[ ]*(#{1,6}\\\\s+(.*?)(\\\\s+#{1,6})?\\\\s*)$","name":"markup.heading.markdown","patterns":[{"include":"text.html.markdown#inline"}]},"heading-setext":{"patterns":[{"match":"^(={3,})(?=[ \\\\t]*$\\\\n?)","name":"markup.heading.setext.1.markdown"},{"match":"^(-{3,})(?=[ \\\\t]*$\\\\n?)","name":"markup.heading.setext.2.markdown"}]},"inline":{"patterns":[{"include":"#component_inline"},{"include":"#span"},{"include":"#attributes"}]},"lists":{"patterns":[{"begin":"(^|\\\\G)([ ]*)([*+-])([ \\\\t])","beginCaptures":{"3":{"name":"punctuation.definition.list.begin.markdown"}},"name":"markup.list.unnumbered.markdown","patterns":[{"include":"#block"},{"include":"text.html.markdown#list_paragraph"}],"while":"((^|\\\\G)([ ]*|\\\\t))|(^[ \\\\t]*$)"},{"begin":"(^|\\\\G)([ ]*)(\\\\d+\\\\.)([ \\\\t])","beginCaptures":{"3":{"name":"punctuation.definition.list.begin.markdown"}},"name":"markup.list.numbered.markdown","patterns":[{"include":"#block"},{"include":"text.html.markdown#list_paragraph"}],"while":"((^|\\\\G)([ ]*|\\\\t))|(^[ \\\\t]*$)"}]},"paragraph":{"begin":"(^|\\\\G)[ ]*(?=\\\\S)","name":"meta.paragraph.markdown","patterns":[{"include":"text.html.markdown#inline"},{"include":"text.html.derivative"},{"include":"#heading-setext"}],"while":"(^|\\\\G)((?=\\\\s*[-=]{3,}\\\\s*$)|[ ]{4,}(?=\\\\S))"},"span":{"captures":{"1":{"name":"punctuation.definition.tag.start.component"},"2":{"name":"string.other.link.description.title.markdown"},"3":{"name":"punctuation.definition.tag.end.component"},"4":{"patterns":[{"include":"#attributes"}]}},"match":"(\\\\[)([^]]*)(\\\\])(({)([^{]*)(}))?\\\\s","name":"span.component.mdc"}},"scopeName":"text.markdown.mdc","embeddedLangs":["markdown","yaml","html-derivative"]}`)),l=[...r,...t,...e,a];export{l as default};
