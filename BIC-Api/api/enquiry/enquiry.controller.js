const {viewAvailability:viewAvailabilityService,viewEnquiry:viewEnquiryService,submitEnquiry:submitEnquiryService,deleteEnquire:deleteEnquireService} = require('./enquiry.service');
const {json} = require('express').json();

module.exports={
    viewEnquiry:(req,res)=>{
        viewEnquiryService((err,results)=>{
            if(err){
                return res.json({
                    success:0,
                    message:"Error Fetching Enquiries"
                })
            }
            else if(results[0]===undefined){
                return res.json({
                    success:0,
                    message:"No Enquires to View"
                })
            }
            return res.json({
                success:1,
                data:results
            })
        })
    },
    submitEnquiry:(req,res)=>{
        const data = req.body;
        console.log(data);
        submitEnquiryService(data,(err,results)=>{
        if(err){
            return res.json({
                success:0,
                message:"Error inserting values"
            });
        }
        return res.json({
            success:1,
            message:"Successfully Inserted"
        });
        })
    },
    deleteEnquire:(req,res)=>{
        const data = req.body;
        viewAvailabilityService(data,(err,results)=>{      
            if(results[0] === undefined){
                return res.json({
                    success:0,
                    message:"The enquiry that you are trying to delete doesn't exist"
                })
            }
            else{
                deleteEnquireService(data,(err,results)=>{
                    if(err){
                        return res.json({
                            success:0,
                            message:"Error Deleting Enquiry"
                        })
                    }
                    return res.json({
                        success:1,
                        data:"Successfully Deleted"
                    })
                });
            }
        });
      
    }
}