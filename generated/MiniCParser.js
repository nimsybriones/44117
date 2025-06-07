// Generated from MiniC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCListener from './MiniCListener.js';
import MiniCVisitor from './MiniCVisitor.js';

const serializedATN = [4,1,17,123,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
5,1,43,8,1,10,1,12,1,46,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
1,4,1,4,1,5,1,5,1,5,1,5,5,5,65,8,5,10,5,12,5,68,9,5,3,5,70,8,5,1,6,1,6,1,
6,1,7,5,7,76,8,7,10,7,12,7,79,9,7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,5,10,96,8,10,10,10,12,10,99,9,10,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,110,8,11,10,11,12,11,113,9,11,1,
12,1,12,1,12,1,12,1,12,1,12,3,12,121,8,12,1,12,0,3,2,20,22,13,0,2,4,6,8,
10,12,14,16,18,20,22,24,0,1,1,0,1,3,120,0,29,1,0,0,0,2,34,1,0,0,0,4,47,1,
0,0,0,6,56,1,0,0,0,8,58,1,0,0,0,10,69,1,0,0,0,12,71,1,0,0,0,14,77,1,0,0,
0,16,80,1,0,0,0,18,82,1,0,0,0,20,86,1,0,0,0,22,100,1,0,0,0,24,120,1,0,0,
0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,
30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,1,33,1,1,0,0,0,34,35,6,1,-1,0,35,
36,3,4,2,0,36,37,5,16,0,0,37,44,1,0,0,0,38,39,10,1,0,0,39,40,3,4,2,0,40,
41,5,16,0,0,41,43,1,0,0,0,42,38,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,
1,0,0,0,45,3,1,0,0,0,46,44,1,0,0,0,47,48,3,6,3,0,48,49,3,8,4,0,49,50,5,11,
0,0,50,51,3,10,5,0,51,52,5,12,0,0,52,53,5,13,0,0,53,54,3,14,7,0,54,55,5,
14,0,0,55,5,1,0,0,0,56,57,7,0,0,0,57,7,1,0,0,0,58,59,5,5,0,0,59,9,1,0,0,
0,60,70,1,0,0,0,61,66,3,12,6,0,62,63,5,15,0,0,63,65,3,12,6,0,64,62,1,0,0,
0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,
69,60,1,0,0,0,69,61,1,0,0,0,70,11,1,0,0,0,71,72,3,6,3,0,72,73,3,8,4,0,73,
13,1,0,0,0,74,76,3,16,8,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,
1,0,0,0,78,15,1,0,0,0,79,77,1,0,0,0,80,81,3,18,9,0,81,17,1,0,0,0,82,83,5,
4,0,0,83,84,3,20,10,0,84,85,5,16,0,0,85,19,1,0,0,0,86,87,6,10,-1,0,87,88,
3,22,11,0,88,97,1,0,0,0,89,90,10,3,0,0,90,91,5,9,0,0,91,96,3,22,11,0,92,
93,10,2,0,0,93,94,5,10,0,0,94,96,3,22,11,0,95,89,1,0,0,0,95,92,1,0,0,0,96,
99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,21,1,0,0,0,99,97,1,0,0,0,100,101,
6,11,-1,0,101,102,3,24,12,0,102,111,1,0,0,0,103,104,10,3,0,0,104,105,5,7,
0,0,105,110,3,24,12,0,106,107,10,2,0,0,107,108,5,8,0,0,108,110,3,24,12,0,
109,103,1,0,0,0,109,106,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,
1,0,0,0,112,23,1,0,0,0,113,111,1,0,0,0,114,115,5,11,0,0,115,116,3,20,10,
0,116,117,5,12,0,0,117,121,1,0,0,0,118,121,5,6,0,0,119,121,5,5,0,0,120,114,
1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,25,1,0,0,0,10,29,44,66,69,77,
95,97,109,111,120];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCParser extends antlr4.Parser {

    static grammarFileName = "MiniC.g4";
    static literalNames = [ null, "'int'", "'float'", "'char'", "'return'", 
                            null, null, "'*'", "'/'", "'+'", "'-'", "'('", 
                            "')'", "'{'", "'}'", "','", "';'" ];
    static symbolicNames = [ null, "INT_TYPE", "FLOAT_TYPE", "CHAR_TYPE", 
                             "RETURN", "IDENT", "ENTERO", "MUL", "DIV", 
                             "ADD", "SUB", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "COMMA", "SEMI", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "identificador", "parametros", "parametro", "cuerpo", 
                         "instruccion", "retorno", "expresion", "termino", 
                         "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniCParser.ruleNames;
        this.literalNames = MiniCParser.literalNames;
        this.symbolicNames = MiniCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.declaraciones_sempred(localctx, predIndex);
    	case 10:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 11:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    declaraciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniCParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 26;
	            this.declaraciones(0);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(MiniCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	declaraciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new DeclaracionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MiniCParser.RULE_declaraciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new UnaDeclaracionContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 35;
	        this.declaracion();
	        this.state = 36;
	        this.match(MiniCParser.SEMI);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new VariasDeclaracionesContext(this, new DeclaracionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_declaraciones);
	                this.state = 38;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 39;
	                this.declaracion();
	                this.state = 40;
	                this.match(MiniCParser.SEMI); 
	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.tipo();
	        this.state = 48;
	        this.identificador();
	        this.state = 49;
	        this.match(MiniCParser.LPAREN);
	        this.state = 50;
	        this.parametros();
	        this.state = 51;
	        this.match(MiniCParser.RPAREN);
	        this.state = 52;
	        this.match(MiniCParser.LBRACE);
	        this.state = 53;
	        this.cuerpo();
	        this.state = 54;
	        this.match(MiniCParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniCParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(MiniCParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            localctx = new SinParametrosContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 1:
	        case 2:
	        case 3:
	            localctx = new ListaDeParametrosContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.parametro();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===15) {
	                this.state = 62;
	                this.match(MiniCParser.COMMA);
	                this.state = 63;
	                this.parametro();
	                this.state = 68;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniCParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.tipo();
	        this.state = 72;
	        this.identificador();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniCParser.RULE_cuerpo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 74;
	            this.instruccion();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniCParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(MiniCParser.RETURN);
	        this.state = 83;
	        this.expresion(0);
	        this.state = 84;
	        this.match(MiniCParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, MiniCParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new SoloTerminoContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 87;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 95;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new SumaContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_expresion);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 90;
	                    this.match(MiniCParser.ADD);
	                    this.state = 91;
	                    this.termino(0);
	                    break;

	                case 2:
	                    localctx = new RestaContext(this, new ExpresionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_expresion);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 93;
	                    this.match(MiniCParser.SUB);
	                    this.state = 94;
	                    this.termino(0);
	                    break;

	                } 
	            }
	            this.state = 99;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, MiniCParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new SoloFactorContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 101;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 109;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultContext(this, new TerminoContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_termino);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 104;
	                    this.match(MiniCParser.MUL);
	                    this.state = 105;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new DivContext(this, new TerminoContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MiniCParser.RULE_termino);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 107;
	                    this.match(MiniCParser.DIV);
	                    this.state = 108;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 113;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiniCParser.RULE_factor);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            localctx = new ParensContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(MiniCParser.LPAREN);
	            this.state = 115;
	            this.expresion(0);
	            this.state = 116;
	            this.match(MiniCParser.RPAREN);
	            break;
	        case 6:
	            localctx = new LiteralEnteroContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.match(MiniCParser.ENTERO);
	            break;
	        case 5:
	            localctx = new IdFactorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.match(MiniCParser.IDENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniCParser.EOF = antlr4.Token.EOF;
MiniCParser.INT_TYPE = 1;
MiniCParser.FLOAT_TYPE = 2;
MiniCParser.CHAR_TYPE = 3;
MiniCParser.RETURN = 4;
MiniCParser.IDENT = 5;
MiniCParser.ENTERO = 6;
MiniCParser.MUL = 7;
MiniCParser.DIV = 8;
MiniCParser.ADD = 9;
MiniCParser.SUB = 10;
MiniCParser.LPAREN = 11;
MiniCParser.RPAREN = 12;
MiniCParser.LBRACE = 13;
MiniCParser.RBRACE = 14;
MiniCParser.COMMA = 15;
MiniCParser.SEMI = 16;
MiniCParser.WS = 17;

MiniCParser.RULE_programa = 0;
MiniCParser.RULE_declaraciones = 1;
MiniCParser.RULE_declaracion = 2;
MiniCParser.RULE_tipo = 3;
MiniCParser.RULE_identificador = 4;
MiniCParser.RULE_parametros = 5;
MiniCParser.RULE_parametro = 6;
MiniCParser.RULE_cuerpo = 7;
MiniCParser.RULE_instruccion = 8;
MiniCParser.RULE_retorno = 9;
MiniCParser.RULE_expresion = 10;
MiniCParser.RULE_termino = 11;
MiniCParser.RULE_factor = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MiniCParser.EOF, 0);
	};

	declaraciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionesContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionesContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_declaraciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnaDeclaracionContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterUnaDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitUnaDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitUnaDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.UnaDeclaracionContext = UnaDeclaracionContext;

class VariasDeclaracionesContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterVariasDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitVariasDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitVariasDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.VariasDeclaracionesContext = VariasDeclaracionesContext;

class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	LPAREN() {
	    return this.getToken(MiniCParser.LPAREN, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniCParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MiniCParser.LBRACE, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	RBRACE() {
	    return this.getToken(MiniCParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_tipo;
    }

	INT_TYPE() {
	    return this.getToken(MiniCParser.INT_TYPE, 0);
	};

	FLOAT_TYPE() {
	    return this.getToken(MiniCParser.FLOAT_TYPE, 0);
	};

	CHAR_TYPE() {
	    return this.getToken(MiniCParser.CHAR_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_identificador;
    }

	IDENT() {
	    return this.getToken(MiniCParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_parametros;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SinParametrosContext extends ParametrosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSinParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSinParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitSinParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.SinParametrosContext = SinParametrosContext;

class ListaDeParametrosContext extends ParametrosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCParser.COMMA);
	    } else {
	        return this.getToken(MiniCParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterListaDeParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitListaDeParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitListaDeParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.ListaDeParametrosContext = ListaDeParametrosContext;

class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_cuerpo;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_retorno;
    }

	RETURN() {
	    return this.getToken(MiniCParser.RETURN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SumaContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	ADD() {
	    return this.getToken(MiniCParser.ADD, 0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSuma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSuma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitSuma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.SumaContext = SumaContext;

class SoloTerminoContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSoloTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSoloTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitSoloTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.SoloTerminoContext = SoloTerminoContext;

class RestaContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SUB() {
	    return this.getToken(MiniCParser.SUB, 0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterResta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitResta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitResta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.RestaContext = RestaContext;

class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_termino;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DivContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	DIV() {
	    return this.getToken(MiniCParser.DIV, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.DivContext = DivContext;

class MultContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	MUL() {
	    return this.getToken(MiniCParser.MUL, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterMult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitMult(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitMult(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.MultContext = MultContext;

class SoloFactorContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterSoloFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitSoloFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitSoloFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.SoloFactorContext = SoloFactorContext;

class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCParser.RULE_factor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(MiniCParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniCParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.ParensContext = ParensContext;

class IdFactorContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENT() {
	    return this.getToken(MiniCParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterIdFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitIdFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitIdFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.IdFactorContext = IdFactorContext;

class LiteralEnteroContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENTERO() {
	    return this.getToken(MiniCParser.ENTERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.enterLiteralEntero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCListener ) {
	        listener.exitLiteralEntero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCVisitor ) {
	        return visitor.visitLiteralEntero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

MiniCParser.LiteralEnteroContext = LiteralEnteroContext;


MiniCParser.ProgramaContext = ProgramaContext; 
MiniCParser.DeclaracionesContext = DeclaracionesContext; 
MiniCParser.DeclaracionContext = DeclaracionContext; 
MiniCParser.TipoContext = TipoContext; 
MiniCParser.IdentificadorContext = IdentificadorContext; 
MiniCParser.ParametrosContext = ParametrosContext; 
MiniCParser.ParametroContext = ParametroContext; 
MiniCParser.CuerpoContext = CuerpoContext; 
MiniCParser.InstruccionContext = InstruccionContext; 
MiniCParser.RetornoContext = RetornoContext; 
MiniCParser.ExpresionContext = ExpresionContext; 
MiniCParser.TerminoContext = TerminoContext; 
MiniCParser.FactorContext = FactorContext; 
