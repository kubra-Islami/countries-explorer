export default function SkeletonGrid() {
    return (
        <div className="row g-3 g-md-4">
            {Array.from({ length: 9 }).map((_, i) => (
                <div className="col-12 col-sm-6 col-lg-6" key={i}>
                    <div className="country-card glass rounded-4 h-100 d-flex p-3 gap-3">

                        {/* Fake flag */}
                        <div
                            className="skeleton rounded"
                            style={{ width: "25%", height: "90px" }}
                        />

                        {/* Fake content */}
                        <div className="flex-grow-1 d-flex justify-content-between align-items-end">
                            <div
                                className="skeleton rounded mb-2"
                                style={{ height: 20, width: "30%" }}
                            />
                            <div
                                className="skeleton rounded mb-2 "
                                style={{ height: 20, width: "30%" }}
                            />
                            <div
                                className="skeleton rounded mb-2 "
                                style={{ height: 20, width: "30%" }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
