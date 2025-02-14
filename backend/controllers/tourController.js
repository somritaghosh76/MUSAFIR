import Tour from '../models/Tour.js'

//create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save()
        res.status(200).json({
            success: true,
            message: 'Successfully created',
            data: savedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create, try again'
        });
    }
};

//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });
        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updatedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update, try again'
        });
    }
};

//delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete, try again'
        });
    }
};

//get single tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }
        res.status(200).json({
            success: true,
            message: 'Successfully fetched',
            data: tour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

//get all tours
export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    try {
        const tours = await Tour.find({}).skip(page * 8).limit(8);
        res.status(200).json({
            success: true,
            count: tours.length,
            message: 'Successfully fetched',
            data: tours,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

//Get Tour By Search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i'); //here 'i' means case sensitive
    const distance = parseInt(req.query.distance) || 0; 
    const maxGroupSize = parseInt(req.query.maxGroupSize) || 0;

    try {
        //gte means greter than equal to
        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize },
        });

        res.status(200).json({
            success: true,
            message: 'Successfully fetched',
            data: tours,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

//get featured tours
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured:true}).limit(8);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched',
            data: tours,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

//get tour counts
export const getTourCount = async (req,res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true, data:tourCount});
    } catch (err) {
        res.status(500).json({success:false, message: "Failed to fetch!" });
    }
}