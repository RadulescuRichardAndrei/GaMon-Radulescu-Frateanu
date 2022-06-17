const { selectRep,createRep,deleteRep,selectRepByID } = require("../Models/ReportModel");

async function getReports(req,res){
    try{
        const reports= await selectRep();
        res.writeHead(200, {'Content-Type': 'application/json'})
       
        res.end(JSON.stringify(reports.rows.at(0)));

    }catch(err){
        console.log(err.message);
    }

}
async function getReportByID(req,res,id){
    try{
        const report= await selectRepByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(report.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function createReport(req,res){
    try{
        const report= await createRep(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(report.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deleteReport(req,res,id){
    try{
        const report=await deleteRep(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(report.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createReport,
    getReportByID,
    getReports,
    deleteReport,
}