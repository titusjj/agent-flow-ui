import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { listify } from "radash";
import { useMemo } from "react";

import type { TextMessageNodeData } from "~/modules/nodes/nodes/text-message-node/text-message.node";
import type { BuilderNodeType } from "~/modules/nodes/types";

import { MessageChannelDetails } from "~/modules/nodes/nodes/text-message-node/constants/channels";

import { cn } from "~@/utils/cn";

type TextMessageNodePropertyPanelProps = Readonly<{
    id: string;
    type: BuilderNodeType;
    data: TextMessageNodeData;
    updateData: (data: Partial<TextMessageNodeData>) => void;
}>;

export default function TextMessageNodePropertyPanel({ id, data, updateData }: TextMessageNodePropertyPanelProps) {
    // const currentMessageChannelDetail = useMemo(() => {
    //     return MessageChannelDetails[data.channel];
    // }, [data.channel]);

    return (
        <div className="flex flex-col gap-4.5 p-4">
            <div className="flex flex-col">
                <div className="text-xs text-light-900/60 font-semibold">
                    Unique Identifier
                </div>

                <div className="mt-2 flex">
                    <input type="text" value={id} readOnly className="h-8 w-full border border-dark-200 rounded-md bg-dark-400 px-2.5 text-sm font-medium shadow-sm outline-none transition hover:(bg-dark-300/60) read-only:(text-light-900/80 op-80 hover:bg-dark-300/30)" />
                </div>
            </div>

            <div className="flex flex-col">
                <div className="text-xs text-light-900/60 font-semibold">
                    Message
                </div>

                <div className="mt-2 flex">
                    <textarea
                        value={data.message}
                        onChange={e => updateData({ message: e.target.value })}
                        placeholder="Type your message here..."
                        className="min-h-30 w-full resize-none border border-dark-200 rounded-md bg-dark-400 px-2.5 py-2 text-sm font-medium shadow-sm outline-none transition focus:(border-teal-800 bg-dark-500 ring-2 ring-teal-800/50) hover:(bg-dark-300/60) placeholder:(text-light-900/50 font-normal italic) read-only:(text-light-900/80)"
                    />
                </div>
            </div>
        </div>
    );
}
