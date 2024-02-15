const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Muano",
                    last: "Makhokha"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/8.jpg"
                },
                login: {
                    username: "The Brain"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}