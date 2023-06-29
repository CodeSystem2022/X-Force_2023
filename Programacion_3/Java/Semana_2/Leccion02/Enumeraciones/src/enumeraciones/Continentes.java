package enumeraciones;

public enum Continentes {
    AFRICA(53, "1.2 billones"), EUROPE(46,"1.1 billones" ), ASIA(44, "9 millones"), AMERICA(34, "150 millones"), OCEANIA(14, "1.2 billones");
    
    private final int countries;
    private String population; 
    
    Continentes(int countries, String population){
        this.countries = countries;
        this.population = population;
    }
    
    //Métodp Get
    public int getCountries(){
        return this.countries;
}
    
    public String getPopulation(){
        return this.population; 
    }
}
