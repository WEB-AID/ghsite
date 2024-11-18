const Overlay = ({ onClick }: { onClick: () => void }) => {
    return (
        <div
            className="fixed inset-0 opacity-90 bg-white z-10"
            onClick={onClick}
        />
    )
}

export default Overlay
