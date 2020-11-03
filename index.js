class Residue{
    set index(index){
        this._index=index;
    }
    set pdb_id(pdb_id){
        this._pdb_id=pdb_id;
    }
    set chain_id(chain_id){
        this._chain_id=chain_id;
    }
    set residue_num(residue_num){
        this._residue_num-residue_num
    }
    set wt_aa(wt_aa){
        this._wt_aa=wt_aa
    }
    set pred_aa(pred_aa){
        this._pred_aa=pred_aa
    }
    set wt_aa_prob(wt_aa_prob){
        this._wt_aa_prob=wt_aa_prob
    }
    set pred_aa_prob(pred_aa_prob){
        this._pred_aa_prob=pred_aa_prob
    }
    get index(){
        return this._index
    }
    get residue_num(){
        return this._residue_num
    }
    get wt_aa(){
        return this._wt_aa
    }
    get wt_aa_prob(){
        return this._wt_aa_prob
    }
    constructor(){
    }
}
let res=[]; // array to store residue objects


const csv=require('csvtojson')
// Invoking csv returns a promise
const converter=csv()
.fromFile('./2ISK.csv')
.then((json)=>{
    let r;// Will be a Residue Object
    json.forEach((row)=>{
        r=new Residue();// New Residue Object
        Object.assign(r,row);// Assign json to the new Residue
        res.push(r);// Add the Employee to the Array
        
    });
}).then(()=>{
    // Output the names of the Employees
    res.forEach((re)=>{
        console.log(re.wt_aa === 'LEU');// Invoke the wt_aa(resname) getter
    });
});