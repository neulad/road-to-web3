interface NFTCardProps {
  nft: any;
}

export const NFTCard = ({ nft }: NFTCardProps) => {
  console.log(nft.media[0].gateway);
  return (
    <div className="w-1/4 flex flex-col ">
      <div className="rounded-md">
        <img
          className="object-cover h-128 w-full rounded-t-md"
          src={nft.media[0].gateway}
        ></img>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
        <div className="">
          <h2 className="text-lg text-gray-800">{nft.title}</h2>
          <p className="text-gray-600">Id: {parseInt(nft.id.tokenId)}</p>
          <p className="text-gray-600 flex justify-between">
            <span>{nft.contract.address.slice(0, 10)}</span>
            <span
              className="text-sky-700 hover:cursor-pointer"
              onClick={e => {
                const address =
                  e.currentTarget.previousElementSibling?.innerHTML;

                navigator.clipboard.writeText(address || '');
              }}
            >
              copy
            </span>
          </p>
        </div>

        <div className="flex-grow mt-2">
          <p className="text-gray-600">{nft.description.slice(0, 10)}</p>
        </div>
      </div>
    </div>
  );
};
