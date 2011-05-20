var keyFatura = "0Au9l3OyvDQ5odFJHRWMxRnBkN0M2RTFHSFVWX3R5R0E";
var keyCategoria = "0Au9l3OyvDQ5odFNSVjlEekczdDJLSzlKakYzOFhqSXc";

var gastosFaturaProximoMes =
	"select H, D, I "+
	"where year(I) = year(now()) and month(I) = month(now())+1 "+
	"label D 'Valor' "+
	"format I 'MMM/yyyy', D '#,##0.00'";

var categEValorFaturaMesAtual =
	"select H, sum(D) "+
	"where year(I) = year(now()) and month(I) = month(now()) "+
	"group by H "+
	"label sum(D) 'Gasto' "+
	"format sum(D) '#,##0.00'";

var categEValorFaturaProximoMes =
	"select H, sum(D) "+
	"where year(I) = year(now()) and month(I) = month(now())+1 "+
	"group by H "+
	"label sum(D) 'Gasto' "+
	"format sum(D) '#,##0.00'";
	
var categEValorCategoriaMesCompleto = 
	"select B, C order by B "+
	"label C 'Limite' "+
	"format C '#,##0.00'";

var categEValorCategoriaDiasCorridos = 
	"select B, C*(day(now())/30) "+
	"order by B "+
	"label C*(day(now())/30) 'Limite' "+
	"format C*(day(now())/30) '#,##0.00'";
	